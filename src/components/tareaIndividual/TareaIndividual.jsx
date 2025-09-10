import React, { useContext } from "react";
import { TareasContext } from "../../context/TareasContext";

function TareaIndividual({ tarea }) {
  const { eliminarTarea, completarTarea, editarTarea } = useContext(TareasContext);

  const handleEditar = () => {
    const nuevoTexto = prompt("Editar texto de la tarea:", tarea.tarea);
    if (nuevoTexto === null) return;

    const nuevaFecha = prompt("Editar fecha (AAAA-MM-DD):", tarea.fecha);
    if (nuevaFecha === null) return;

    editarTarea(tarea.id, nuevoTexto, nuevaFecha);
  };

  return (
    <p className="tarea-item">
      <input
        type="checkbox"
        checked={tarea.estado === "completada"}
        onChange={() => completarTarea(tarea.id)}
      />
      <span
        className={`texto-tarea ${
          tarea.estado === "completada" ? "completada" : ""
        }`}
      >
        {tarea.tarea} - <small>{tarea.fecha}</small>
      </span>
      <button className="btn-editar" onClick={handleEditar}>Editar</button>
      <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>
        Eliminar
      </button>
    </p>
  );
}

export default TareaIndividual;

