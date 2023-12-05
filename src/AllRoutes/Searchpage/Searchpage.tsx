import React from 'react'
import { useSelector } from 'react-redux'
import {Box} from "@mui/material"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Card/Card'

const Searchpage = () => {
  const reducer=useSelector((store:any)=>store.reducer)
  return (
    <Box>
       <Navbar/>
        <Box>
{
  reducer.searchedData.map((el:any,i:any)=>{
    return (
      <Card key={i}/>
    )
  })
}
        </Box>
        <Footer/>
    </Box>
  )
}

export default Searchpage