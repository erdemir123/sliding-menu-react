import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../pages/Login"
import Store from '../pages/Store'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/store" element={<Store />}/>
      </Routes>
    </div>
  )
}

export default AppRouter
