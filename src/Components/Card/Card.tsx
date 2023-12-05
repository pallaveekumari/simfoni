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
<img className={styles.fixedImg} src="https://media.licdn.com/dms/image/C561BAQGbkc-3MmE8Aw/company-background_10000/0/1623215240990/simfoni_cover?e=1702418400&v=beta&t=s8GVnXkan7xQO1xdfD69JnW1UWWT99OE3ppxZjmWpQo" alt="" />
  </Box>
  <Box className={styles.nescafe}>{element.name}</Box>
  <Box className={styles.sku}>SKU Number: {element.sku}</Box>
  <Box className={styles.nescafe}> ${place=="searchPage" ? element.item_price : element.pricing.customerPrice.unitPrice.value}/each</Box>
  <Box className={styles.viewDetails} onClick={()=>{
    navigate(`/details/${element.sku}/${element.name}/${place=="searchPage" ? element.item_price : element.pricing.customerPrice.unitPrice.value}`)
  }}>View Details</Box>
        </Box>
    </Box>
  )
}

export default Card