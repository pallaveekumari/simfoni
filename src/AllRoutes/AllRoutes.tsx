import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'

const AllRoutes = () => {
  return (
   <Routes>
  <Route path={"/"} element={<Homepage/>}/>
   </Routes>
  )
}

export default AllRoutes