import React, { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const { login } = useContext(UsuarioContext);  // aquí usamos useContext
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLoginClick = async () => {
    setMensaje("");
    try {
      if (!username.trim() || !password.trim()) {
        setMensaje("Completa todos los campos");
        return;
      }

      await login(username, password);
      navigate("/inicio");  // redirige al inicio después del login
    } catch (error) {
      setMensaje(error.message || "❌ Error en el login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Nombre de usuario</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Contraseña</label>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}
      <button onClick={handleLoginClick}>Iniciar sesión</button>
    </div>
  );
}

export default FormLogin;