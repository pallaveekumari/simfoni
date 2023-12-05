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
    <Box>
        
    </Box>

   </Box>
  )
}

export default Productdetails