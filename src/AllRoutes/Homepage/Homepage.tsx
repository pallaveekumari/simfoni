import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { categoryProducts, getAllProducts } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Hompage.module.css";

import { CircularProgress } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../Components/Card/Card";

const Homepage = () => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const reducer = useSelector((store: any) => store.reducer);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(categoryProducts());
  }, []);

  let images = [
    "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
    "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
    "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",

    "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
    "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",

    "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <Box>
      <Navbar />
      <Box className={styles.mainBox}>
        <Slider autoplaySpeed={3000} autoplay={true} {...settings}>
          {images.map((element: any) => {
            return (
              <Box
                sx={{
                  height: "28rem",
                  [theme.breakpoints.down("sm")]: {
                    height: "150px",
                  },
                }}
                key={element._id}
                // style={{ width: "100%" }}
              >
                <img className={styles.singleSliderImage} src={element} />
              </Box>
            );
          })}
        </Slider>
      </Box>
      <Box className={styles.bestSeller}>
        <Box className={styles.bestBox}>BEST SELLING CATEGORIES</Box>
        {reducer.categoryLoading ? (
          <CircularProgress />
        ) : (
          <Slider autoplaySpeed={3000} autoplay={true} {...settings1}>
            {reducer.categoryData.map((element: any, i: any) => {
              return (
                <Box key={i}>
                  <Box className={styles.bestEachBoxes}>
                    <Box className={styles.bestImageBox}>
                      <img
                        className={styles.bestImages}
                        src="https://simfoni.com/wp-content/uploads/2021/09/Simfoni-Gears-Up-for-Expansion.jpg"
                      />
                    </Box>
                    <Box className={styles.bestImageText}>
                      {element.displayName}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Slider>
        )}
      </Box>

      <Box className={styles.bestSeller}>
        <Box className={styles.bestBox}>TOP SUPPLIERS</Box>
        {reducer.categoryLoading ? (
          <CircularProgress />
        ) : (
          <Slider autoplaySpeed={3000} autoplay={true} {...settings1}>
            {reducer.categoryData.map((element: any, i: any) => {
              return (
                <Box key={i}>
                  <Box className={styles.bestEachBoxes}>
                    <Box className={styles.bestImageBox}>
                      <img
                        className={styles.bestImages}
                        src="https://simfoni.com/wp-content/uploads/2021/09/Simfoni-Gears-Up-for-Expansion.jpg"
                      />
                    </Box>
                    <Box className={styles.bestImageText}>
                      {element.displayName}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Slider>
        )}
      </Box>

      <Box className={styles.allproductsBox}>
        <Box className={styles.bestBox}>BEST SELLING ITEMS</Box>
        {reducer.getProductsLoading ? (
          <CircularProgress />
        ) : (
          <Slider autoplaySpeed={3000} autoplay={true} {...settings1}>
            {reducer.allProducts.map((element: any, i: any) => {
              return (
                <Box key={i}>
                  <Card element={element} />
                </Box>
              );
            })}
          </Slider>
        )}
      </Box>

      <Box className={styles.allproductsBox}>
        <Box className={styles.bestBox}>NEW ARRIVALS</Box>
        {reducer.getProductsLoading ? (
          <CircularProgress />
        ) : (
          <Slider autoplaySpeed={3000} autoplay={true} {...settings1}>
            {reducer.allProducts.map((element: any, i: any) => {
              return (
                <Box key={i}>
                  <Card element={element} />
                </Box>
              );
            })}
          </Slider>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default Homepage;
