import React, { useEffect } from "react";
import styles from "./Productdetails.module.css";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleGetProductDetailsData } from "../../Redux/action";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Productdetails = () => {
  const params = useParams();

  return (
    <Box>
      <Navbar />
      <Box className={styles.mainContainer}>
        <Box className={styles.shadedImg}>
          <Box className={styles.shadedImgeachbox}>
            <img
              className={styles.fixedImg}
              src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="
              alt=""
            />
          </Box>
          <Box className={styles.shadedImgeachbox}>
            <img
              className={styles.fixedImg}
              src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="
              alt=""
            />
          </Box>
          <Box className={styles.shadedImgeachbox}>
            <img
              className={styles.fixedImg}
              src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="
              alt=""
            />
          </Box>
        </Box>
        <Box className={styles.bigImage}>
          <img
            className={styles.fixedImage}
            src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="
            alt=""
          />
        </Box>
         <Box className={styles.Eachcard}>
          <Box className={styles.nescafe}>{params.name}</Box>
          <Box className={styles.sku}>SKU Number {params.sku}</Box>
          <Box className={styles.nescafe}>Price: ${params.price}/each</Box>
          <Box className={styles.viewDetails}>Add to Cart</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Productdetails;
