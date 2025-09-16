import React, { createContext, useState, useEffect, useContext } from "react";
import ServicesTareas from "../services/ServicesTareas";
import { UsuarioContext } from "./UsuarioContext"; // importa el contexto de usuario

export const TareasContext = createContext();

export function TareasProvider({ children }) {
  const { usuario } = useContext(UsuarioContext); // usuario logueado
  const [tareas, setTareas] = useState([]);

  // Trae todas las tareas, pero luego se filtran por userId
  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const tareasTraidas = await ServicesTareas.getTareas();
        setTareas(tareasTraidas);
      } catch (error) {
        console.error("Error al cargar las tareas", error);
      }
    };
    fetchTareas();
  }, []);

  // Agregar nueva tarea
  const agregarTarea = async (texto, fecha) => {
    if (!texto.trim() || !fecha) {
      alert("Ingrese un tarea y una fecha");
      return;
    }

    if (!usuario) {
      alert("Debe iniciar sesión para agregar tareas");
      return;
    }

    const nuevaTarea = {
      tarea: texto,
      fecha,
      estado: "pendiente",
      userId: usuario.id, // 🔹 clave: tarea pertenece al usuario logueado
    };

    const tareaGuardada = await ServicesTareas.postTareas(nuevaTarea);
    setTareas([...tareas, tareaGuardada]);
  };

  // Eliminar tarea
  const eliminarTarea = async (id) => {
    await ServicesTareas.deleteTareas(id);
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  // Completar / desmarcar tarea
  const completarTarea = async (id) => {
    const tareaEncontrada = tareas.find((tarea) => tarea.id === id);
    if (!tareaEncontrada) return;

    const tareaActualizada = {
      ...tareaEncontrada,
      estado: tareaEncontrada.estado === "pendiente" ? "completada" : "pendiente",
    };

    await ServicesTareas.putTareas(id, tareaActualizada);
    setTareas(tareas.map((tarea) => (tarea.id === id ? tareaActualizada : tarea)));
  };

  // Editar tarea
  const editarTarea = async (id, nuevoTexto, nuevaFecha) => {
    if (!nuevoTexto.trim() || !nuevaFecha) {
      alert("Ingrese una tarea y seleccione una fecha");
      return;
    }

    const tareaEncontrada = tareas.find((tarea) => tarea.id === id);
    if (!tareaEncontrada) return;

    const tareaActualizada = {
      ...tareaEncontrada,
      tarea: nuevoTexto,
      fecha: nuevaFecha,
    };

    await ServicesTareas.putTareas(id, tareaActualizada);

    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? tareaActualizada : tarea
    );

    setTareas(nuevasTareas);
  };

  // 🔹 Mostrar solo las tareas del usuario logueado
  const tareasFiltradas = usuario
    ? tareas.filter((tarea) => tarea.userId === usuario.id)
    : [];

  return (
    <TareasContext.Provider
      value={{
        tareas: tareasFiltradas,
        agregarTarea,
        eliminarTarea,
        completarTarea,
        editarTarea,
      }}
    >
      {children}
    </TareasContext.Provider>
  );
}