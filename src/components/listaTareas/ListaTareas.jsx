import React, { useContext } from "react";
import { TareasContext } from "../../context/TareasContext";
import TareaIndividual from "../tareaIndividual/TareaIndividual";
import ContadorTareas from "../contador/Contador";

import "./listaTareas.css";

function ListaTareas() {
  const { tareas } = useContext(TareasContext);

  if (tareas.length === 0) return <p className="sinTareas">No existen tareas</p>;

  const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendiente");
  const tareasCompletadas = tareas.filter(tarea => tarea.estado === "completada");

  return (
    <div className="contenedorListaTareas">
      {/* Fila del contador */}
      <div className="filaContador">
        <ContadorTareas />
      </div>

      {/* Fila de tareas */}
      <div className="filaTareas">
        <div className="columnaTareas pendientes">
          <h3>Pendientes</h3>
          {tareasPendientes.length === 0 ? (
            <p>No hay tareas pendientes</p>
          ) : (
            <ul className="listaTareas">
              {tareasPendientes.map(tarea => (
                <TareaIndividual key={tarea.id} tarea={tarea} />
              ))}
            </ul>
          )}
        </div>

        <div className="columnaTareas completadas">
          <h3>Completadas</h3>
          {tareasCompletadas.length === 0 ? (
            <p>No hay tareas completadas</p>
          ) : (
            <ul className="listaTareas">
              {tareasCompletadas.map(tarea => (
                <TareaIndividual key={tarea.id} tarea={tarea} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListaTareas;
