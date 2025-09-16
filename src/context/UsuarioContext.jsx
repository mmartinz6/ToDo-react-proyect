// src/context/UsuarioContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { getUsuarios, postUsuarios } from "../services/ServicesRegistro";

export const UsuarioContext = createContext();

export function UsuariosProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // Recuperar usuario desde localStorage al iniciar
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("userlog");
    if (usuarioGuardado) setUsuario(JSON.parse(usuarioGuardado));
  }, []);

  // Registro
  const registro = async (nuevoUsuario) => {
    const usuarios = await getUsuarios();
    const usuarioExiste = usuarios.find(
      (u) => u.username === nuevoUsuario.username
    );

    if (usuarioExiste) {
      throw new Error("El usuario ya existe");
    }

    // Guardar en db.json
    const creado = await postUsuarios(nuevoUsuario);
    setUsuario(creado);
    localStorage.setItem("userlog", JSON.stringify(creado));
    return creado;
  };

  // Login
  const login = async (username, password) => {
    const usuarios = await getUsuarios();
    const usuarioValido = usuarios.find(
      (u) => u.username === username && u.password === password
    );

    if (!usuarioValido) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    setUsuario(usuarioValido);
    localStorage.setItem("userlog", JSON.stringify(usuarioValido));
    return usuarioValido;
  };

  // Logout
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("userlog");
  };

  return (
    <UsuarioContext.Provider
      value={{ usuario, registro, login, logout }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}