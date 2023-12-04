import React, { useEffect } from 'react'
import {Button,Box} from "@mui/material"
import { getAllProducts } from '../../Redux/action'
import { useDispatch } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from "./Hompage.module.css"
import Card from '../../Components/Card/Card'
const Homepage = () => {

const dispatch:any=useDispatch()


useEffect(()=>{
    dispatch(getAllProducts())
},[])


  return (
    <Box>
      <Navbar/>
        <Box className={styles.crauselContainer}> 
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
        </Box>
<Box className={styles.bestSeller}>
  <Box className={styles.bestBox}>BEST SELLING CATEGORIES</Box>
  <Box className={styles.bestEachBox}>
    <Box className={styles.bestEachBoxes}>
      <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Food and Beverage</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Office Furniture</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Cleaning Products</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Electrical Engineering</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Office Supplies</Box>
    </Box>
  </Box>
</Box>

<Card/>
        <Footer/>
    </Box>
  )
}

export default Homepage