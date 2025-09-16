import React, { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate, Link } from "react-router-dom";
import '../loginUsuario/FormLogin.css';

function FormLogin() {
  const { login } = useContext(UsuarioContext);
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
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>

      <div className="input-group">
        <label>Nombre de usuario</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {mensaje && <p className="mensaje-error">{mensaje}</p>}

      <button className="btn-login" onClick={handleLoginClick}>
        Iniciar sesión
      </button>

      <p className="texto-registro">
        ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
      </p>
    </div>
  );
}

export default FormLogin;
