import React from "react";
import { Box, CircularProgress } from "@mui/material";
import styles from "./Productpage.module.css";
import Card from "../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Productpage = () => {
  const reducer = useSelector((store: any) => store.reducer);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <Box>
      <Navbar />
      <Box className={styles.bestBox}>ALL ITEMS</Box>
      {reducer.getProductsLoading ? (
        <CircularProgress />
      ) : (
        <Box className={styles.allproductsBox}>
          {reducer.allProducts.map((element: any, i: any) => {
            return (
              <Box key={i}>
                <Card element={element} />
              </Box>
            );
          })}
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default Productpage;
