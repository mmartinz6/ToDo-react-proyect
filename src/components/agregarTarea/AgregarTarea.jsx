import React, { useState, useContext } from "react";
import '../agregarTarea/agregarTarea.css';
import { TareasContext } from "../../context/TareasContext";

function AgregarTarea() {
  const { agregarTarea } = useContext(TareasContext);
  const [texto, setTexto] = useState("");
  const [fecha, setFecha] = useState("");

  const hoy = new Date().toISOString().split("T")[0];  //Evita seleccionar fechas anteriores a hoy

  // Función boton para guardar/agregar tarea
  const guardarAgregar = () => {
    if (texto.trim() === "" || fecha === "") return;
    agregarTarea(texto, fecha);
    setTexto("");
    setFecha("");
  };

  // Detecta tecla Enter
  const detectarEnter = (e) => {
    if (e.key === "Enter") {
      guardarAgregar();
    }
  };

  return (
    <div className="contenedorAgregar">
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={detectarEnter}
        className="inputTexto"
      />
      
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        onKeyDown={detectarEnter}
        min={hoy}
        className="inputFecha"
      />

      <button onClick={guardarAgregar} className="btnAgregar">Agregar</button>
    </div>
  );
}

export default AgregarTarea;