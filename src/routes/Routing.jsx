import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Registro from '../pages/Registro'
import Login from '../pages/Login'


const Routing =() => {
  return (
    <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Inicio' element={<Inicio />} />
          <Route path='/Registro' element={<Registro />} />
        </Routes>
    </Router>
  )
}

export default Routing