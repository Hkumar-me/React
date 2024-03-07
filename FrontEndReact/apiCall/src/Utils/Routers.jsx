import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Users from '../components/Users'
import Products from '../components/Products'

function Routers() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} > </Route>
    <Route path="/users" element={<Users/>} > </Route>
    <Route path="/products" element={<Products/>} > </Route>
  </Routes>
  )
}

export default Routers
