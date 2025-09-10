import React, { createContext, useState, useEffect } from 'react';
import ServicesTareas from '../services/ServicesTareas';

export const TareasContext = createContext();

export function TareasProvider({ children }) {
  
  const [tareas, setTareas] = useState([]);

  // Trae tareas desde db.json
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

    const nuevaTarea = {
      tarea: texto,
      fecha,
      estado: "pendiente",
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
      id: tareaEncontrada.id,
      tarea: tareaEncontrada.tarea,
      fecha: tareaEncontrada.fecha,
      estado: tareaEncontrada.estado === "pendiente" ? "completada" : "pendiente",
    };

    await ServicesTareas.putTareas(id, tareaActualizada);
    setTareas(tareas.map((tarea) => (tarea.id === id ? tareaActualizada : tarea)));
  };

  //EditarTarea
  const editarTarea = async() => {
    if (!texto.trim() || !fecha) {
      alert("Ingrese un tarea y selecione una fecha");
      return;
    }
    
    const tareaEncontrada = tareas.find((tarea) => tarea.id === id)
    
    const tareaActualizada = {
      id: tareaEncontrada.id,
      tarea: nuevoTexto,
      fecha: nuevaFecha,
      estado: tareaEncontrada.estado,
    };
    
    await ServicesTareas.putTareas(id, tareaActualizada);
    
    const nuevasTareas = tareas.map((tarea) => tarea.id === id ? tareaActualizada : tarea
  );

  setTareas(nuevasTareas);


  }

  return (
    <TareasContext.Provider value={{ tareas, agregarTarea, eliminarTarea, completarTarea, editarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

