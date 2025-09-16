import React, { useContext } from "react";
import { TareasContext } from "../../context/TareasContext";

function ContadorTareas() {
  const { tareas } = useContext(TareasContext);
  const pendientes = tareas.filter(t => t.estado === "pendiente");
  const completadas = tareas.filter(t => t.estado === "completada");

  return (
    <div>
        <div className="contadoRTareas">
            Pendientes: {pendientes.length} | Completadas: {completadas.length}
        </div>
    </div>
  );
}

export default ContadorTareas;
