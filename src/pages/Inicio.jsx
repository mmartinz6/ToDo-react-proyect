import React from 'react';

import { TareasProvider } from '../context/TareasContext';

import Header from '../components/header/Header';
import AgregarTarea from '../components/agregarTarea/AgregarTarea';
import ListaTareas from '../components/listaTareas/ListaTareas'; // Este componente mostrará las tareas

function Inicio() {
  return (
    <TareasProvider>
      <Header />
      <AgregarTarea />
      <ListaTareas />
    </TareasProvider>
  );
}

export default Inicio;
