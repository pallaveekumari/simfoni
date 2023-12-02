import React, { useEffect } from 'react'
import {Button} from "@mui/material"
import { getAllProducts } from '../../Redux/action'
import { useDispatch } from 'react-redux'
const Homepage = () => {

const dispatch:any=useDispatch()


useEffect(()=>{
    dispatch(getAllProducts())
},[])


  return (
    <div>
        <Button>Add</Button>
    </div>
  )
}

export default Homepage