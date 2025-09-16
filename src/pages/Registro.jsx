import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import FormRegistro from '../components/registroUsuario/FormRegistro';
import { UsuariosProvider } from '../context/UsuarioContext';

function Registro() {
  return (
    <UsuariosProvider>
      <Header />
      <FormRegistro />
      <Footer />
    </UsuariosProvider>
  );
}

export default Registro;
