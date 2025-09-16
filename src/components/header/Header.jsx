import React, { useContext } from "react";
import './Header.css';
import logo from './check-square.svg';
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { usuario, logout } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="contenedorHeader">
      <div className="logoTitulo">
        <img src={logo} alt="Logo" className="logoHeader" />
        <h1 className="tituloHeader">ToDo App</h1>
      </div>

      {usuario && (
        <div className="accionesUsuario">
          <span className="bienvenida">¡Bienvenido/a, {usuario.nombre} {usuario.apellido}</span>
          <button className="botonLogout" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </header>
  );
}

export default Header;

