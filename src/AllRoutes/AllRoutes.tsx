import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Searchpage from './Searchpage/Searchpage'

const AllRoutes = () => {
  return (
   <Routes>
  <Route path={"/"} element={<Homepage/>}/>
  <Route path={"/search"} element={<Searchpage/>}/>
   </Routes>
  )
}

export default AllRoutes