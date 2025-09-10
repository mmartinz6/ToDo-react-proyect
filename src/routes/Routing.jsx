import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'

const Routing =() => {
  return (
    <Router>
        <Routes>
            <Route path='/Inicio' element={<Inicio />} />
        </Routes>
    </Router>
  )
}

export default Routing