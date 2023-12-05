import React from 'react'
import styles from "./Card.module.css"
import {Box,Button} from "@mui/material"
const Card = () => {
  return (
    <Box>
        <Box className={styles.eachCard}>
  <Box className={styles.imageBox}>
<img className={styles.fixedImg} src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="" />
  </Box>
  <Box className={styles.nescafe}>Nescafe Decaffeinated Instant Coffee 500g</Box>
  <Box className={styles.sku}>SKU Number 1278904753</Box>
  <Box className={styles.nescafe}>RS: $17.03/each</Box>
  <Box className={styles.viewDetails}>View Details</Box>
        </Box>
    </Box>
  )
}

export default Card