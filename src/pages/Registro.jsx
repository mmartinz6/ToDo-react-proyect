import React from 'react'
import FormRegistro from '../components/registroUsuario/FormRegistro'
import { UsuariosProvider } from '../context/UsuarioContext'

function Registro() {
  return (
    <UsuariosProvider>
      <FormRegistro />
    </UsuariosProvider>
  )
}

export default Registro
