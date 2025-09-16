import React from "react";
import FormLogin from "../components/loginUsuario/FormLogin";
import { UsuariosProvider } from "../context/UsuarioContext";

function Login() {
  return (
    <UsuariosProvider>
      <FormLogin />
    </UsuariosProvider>
  );
}

export default Login;