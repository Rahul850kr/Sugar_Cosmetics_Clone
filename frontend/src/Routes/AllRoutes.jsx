import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LogSign from './LogSign'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginOrsignup' element={<LogSign/>} />
    </Routes>
  )
}

export default AllRoutes