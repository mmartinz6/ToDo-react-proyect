import React, { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

function FormRegistro() {
  const { registro } = useContext(UsuarioContext);  // usamos useContext

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      if (!nombre.trim() || !apellido.trim() || !correo.trim() || !username.trim() || !password.trim()) {
        setMensaje("Todos los campos son obligatorios*");
        return;
      }

      await registro({ nombre, apellido, correo, username, password });
      setMensaje("Usuario registrado correctamente");

      setNombre("");
      setApellido("");
      setCorreo("");
      setUsername("");
      setPassword("");
    } catch (error) {
      setMensaje(error.message || "❌ Error en el registro");
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label>Apellido</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <br />
        <label>Email</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <br />
        <label>Nombre Usuario</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        {mensaje && <p>{mensaje}</p>}
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}

export default FormRegistro;