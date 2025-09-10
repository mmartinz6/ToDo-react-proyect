import React, { useContext } from "react";
import { TareasContext } from "../../context/TareasContext";
import TareaIndividual from "../tareaIndividual/TareaIndividual";


function ListaTareas() {
  const { tareas } = useContext(TareasContext);

  if (tareas.length === 0) return <p className="no-tareas">No existen tareas</p>;

  return (
    <ul className="lista-tareas">
      {tareas.map((t) => (
        <TareaIndividual key={t.id} tarea={t} />
      ))}
    </ul>
  );
}

export default ListaTareas;