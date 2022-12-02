import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Description from './Description'
import Home from './Home'
import LogSign from './LogSign'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginOrsignup' element={<LogSign/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/description" element={<Description/>}/>
    </Routes>
  )
}

export default AllRoutes;