import React, { useEffect } from 'react'
import styles from "./Productdetails.module.css"
import {Box} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleGetProductDetailsData } from '../../Redux/action';


const Productdetails = () => {
  const params = useParams();
  const dispatch: any = useDispatch();
  const reducer = useSelector((store) => store);
 
 
  // console.log("store is ", reducer);
  useEffect(() => {
    dispatch(handleGetProductDetailsData(params.sku));
  }, []);
 
 



  return (
   <Box>
    <Box className={styles.mainContainer}>
        <Box className={styles.shadedImg}>
          <Box className={styles.shadedImgeachbox} >
            
          <img  className={styles.fixedImg}  src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="" />
          </Box>
          <Box className={styles.shadedImgeachbox} >
            <img className={styles.fixedImg}   src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="" />
          </Box>
          <Box className={styles.shadedImgeachbox} >
          <img  className={styles.fixedImg}  src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="" />
          </Box>
        </Box>
<Box className={styles.bigImage}>

<img  className={styles.fixedImage}  src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="" />


</Box>

<Box className={styles.Eachcard}>
<Box className={styles.nescafe}>Nescafe Decaffeinated Instant Coffee 500g</Box>
  <Box className={styles.sku}>SKU Number 1278904753</Box>
  <Box className={styles.nescafe}>RS: $17.03/each</Box>
  <Box className={styles.viewDetails}>Add to Cart</Box>
 
 

 
</Box>
   
   
    </Box>

   </Box>
  )
}

export default Productdetails