import React from 'react';

import { TareasProvider } from '../context/TareasContext';
import { UsuariosProvider } from '../context/UsuarioContext'; // contexto de usuario

import Header from '../components/header/Header';
import AgregarTarea from '../components/agregarTarea/AgregarTarea';
import ListaTareas from '../components/listaTareas/ListaTareas';
import Footer from '../components/footer/Footer';

function Inicio() {
  return (
    <UsuariosProvider> {/* Contexto de usuario */}
      <TareasProvider> {/* Contexto de tareas */}
        <Header />        {/* aquí Header puede usar useUsuario */}
        <AgregarTarea />  {/* y aquí TareasProvider funciona */}
        <ListaTareas />
        <Footer />
      </TareasProvider>
    </UsuariosProvider>
  );
}

export default Inicio;
