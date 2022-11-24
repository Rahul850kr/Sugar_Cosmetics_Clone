import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LogSign from './LogSign'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginOrsignup' element={<LogSign/>} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default AllRoutes;