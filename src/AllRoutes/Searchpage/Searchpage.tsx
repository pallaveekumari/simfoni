import React from 'react'
import { useSelector } from 'react-redux'
import {Box} from "@mui/material"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Card/Card'
import styles from "./Searchpage.module.css"
const Searchpage = () => {
  const reducer=useSelector((store:any)=>store.reducer)
  return (
    <Box>
       <Navbar/>
        <Box className={styles.allproductsBox}>
{
  reducer.searchedData.map((el:any,i:any)=>{
    return (
      <>
     <Box >
     <Card place={"searchPage"} element={el} key={i}/>
     </Box>
      </>
    )
  })
}
        </Box>
        <Footer/>
    </Box>
  )
}

export default Searchpage