import React, { useEffect } from 'react'
import {Button,Box} from "@mui/material"
import { getAllProducts } from '../../Redux/action'
import { useDispatch } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Homepage = () => {

const dispatch:any=useDispatch()


useEffect(()=>{
    dispatch(getAllProducts())
},[])


  return (
    <Box>
      <Navbar/>
        {/* <Button>Add</Button> */}

        <Footer/>
    </Box>
  )
}

export default Homepage