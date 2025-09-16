import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FormLogin from "../components/loginUsuario/FormLogin";
import { UsuariosProvider } from "../context/UsuarioContext";

function Login() {
  return (
    <UsuariosProvider>
      <Header />
      <FormLogin />
      <Footer />
    </UsuariosProvider>
  );
}

export default Login;
