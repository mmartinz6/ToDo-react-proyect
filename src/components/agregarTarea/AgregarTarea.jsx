import React, { useState, useContext } from "react";
import { TareasContext } from "../../context/TareasContext";

function AgregarTarea() {
  const { agregarTarea } = useContext(TareasContext);
  const [texto, setTexto] = useState("");
  const [fecha, setFecha] = useState("");

  // Función para agregar tarea
  const handleAgregar = () => {
    agregarTarea(texto, fecha);
    setTexto("");
    setFecha("");
  };

  // Detecta tecla Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita que se haga submit si está en un form
      handleAgregar();
    }
  };

  return (
    <div className="form-agregar">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu tarea"
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAgregar}>Agregar</button>
    </div>
  );
}

export default AgregarTarea;