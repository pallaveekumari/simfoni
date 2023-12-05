import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Searchpage from './Searchpage/Searchpage'
import Productdetails from './Productdetails/Productdetails'

const AllRoutes = () => {
  return (
   <Routes>
  <Route path={"/"} element={<Homepage/>}/>
  <Route path={"/search"} element={<Searchpage/>}/>
  <Route path={"/details/:sku"} element={<Productdetails/>}/>
   </Routes>
  )
}

export default AllRoutes