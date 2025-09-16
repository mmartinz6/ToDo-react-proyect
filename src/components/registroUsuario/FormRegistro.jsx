import React, { useState, useContext } from "react"; 
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import "../registroUsuario/FormRegistro.css";

function FormRegistro() {
  const { registro } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleRegistroClick = async () => {
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

      navigate("/login");
    } catch (error) {
      setMensaje(error.message || "Error en el registro");
    }
  };

  return (
    <div className="contenedorRegistro">
      <h2 className="tituloRegistro">Crear Cuenta</h2>

      <div className="grupoInput">
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>

      <div className="grupoInput">
        <label>Apellido</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </div>

      <div className="grupoInput">
        <label>Correo</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </div>

      <div className="grupoInput">
        <label>Nombre Usuario</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="grupoInput">
        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {mensaje && <p className="mensajeError">{mensaje}</p>}

      <button className="btnRegistro" onClick={handleRegistroClick}>
        Crear cuenta
      </button>
    </div>
  );
}

export default FormRegistro;