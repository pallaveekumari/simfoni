import React from 'react'
import styles from "./Card.module.css"
import {Box} from "@mui/material"
const Card = () => {
  return (
    <Box>
        <Box className={styles.eachCard}>
  <Box className={styles.imageBox}>
<img src="" alt="" />
  </Box>
  <Box>Nescafe Decaffeinated Instant Coffee 500g</Box>
  <Box>1278904753</Box>
  <Box>17.03</Box>
  <Box>Saving % 4.60</Box>
  <Box>Supplier: Supplier</Box>
  <Box>Delivery by : 24-Jan-2022</Box>
  <Box></Box>
  <Box>Add to Cart</Box>
        </Box>
    </Box>
  )
}

export default Card