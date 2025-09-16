import React, { useContext, useState } from "react";
import '../tareaIndividual/TareaIndividual.css'
import { TareasContext } from "../../context/TareasContext";

function TareaIndividual({ tarea }) {
  const { eliminarTarea, completarTarea, editarTarea } = useContext(TareasContext);

  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.tarea);
  const [nuevaFecha, setNuevaFecha] = useState(tarea.fecha);

  const hoy = new Date().toISOString().split("T")[0];

  const handleGuardar = () => {
    editarTarea(tarea.id, nuevoTexto, nuevaFecha);
    setEditando(false);
  };

  return (
    <div className="tareaItem">
      <input 
        type="checkbox" 
        checked={tarea.estado === "completada"} 
        onChange={() => completarTarea(tarea.id)}
        className="checkboxTarea"
      />

      {editando && (
        <div className="editarContainer">
          <input 
            type="text" 
            value={nuevoTexto} 
            onChange={(e) => setNuevoTexto(e.target.value)} 
            className="inputTexto"
          />
          <input 
            type="date" 
            value={nuevaFecha} 
            onChange={(e) => setNuevaFecha(e.target.value)} 
            min={hoy}
            className="inputFecha"
          />
          <button onClick={handleGuardar} className="btnGuardar">Guardar</button>
          <button onClick={() => setEditando(false)} className="btnCancelar">Cancelar</button>
        </div>
      )}

      {!editando && (
        <div className="contenidoTarea">
          <span className={`textoTarea ${tarea.estado === "completada" ? "completada" : ""}`}>
            {tarea.tarea} - {tarea.fecha}
          </span>
          <div className="botonesTarea">
            {tarea.estado === "pendiente" && (
              <button className="btnEditar" onClick={() => setEditando(true)}>Editar</button>
            )}
            <button className="btnEliminar" onClick={() => {
              if (window.confirm("¿Seguro que quieres eliminar esta tarea?")) {
                eliminarTarea(tarea.id)
              }
            }}>Eliminar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TareaIndividual;