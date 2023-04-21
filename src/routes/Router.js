import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Registro from '../views/Registro'
import Login from '../views/Login'
import Nav from '../components/Nav'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Nav />}>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Registro />} />
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router