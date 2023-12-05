import React from 'react'
import styles from "./Card.module.css"
import {Box,Button} from "@mui/material"
import { useNavigate } from 'react-router-dom'
const Card = ({element,place}:any) => {
  const navigate=useNavigate()
  return (
    <Box>
        <Box className={styles.eachCard}>
  <Box className={styles.imageBox}>
<img className={styles.fixedImg} src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="" />
  </Box>
  <Box className={styles.nescafe}>{element.name}</Box>
  <Box className={styles.sku}>SKU Number: {element.sku}</Box>
  <Box className={styles.nescafe}> ${place=="searchPage" ? element.item_price : element.pricing.customerPrice.unitPrice.value}/each</Box>
  <Box className={styles.viewDetails} onClick={()=>{
    navigate("/details/${element.sku}")
  }}>View Details</Box>
        </Box>
    </Box>
  )
}

export default Card