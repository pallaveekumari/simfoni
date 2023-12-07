import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { categoryProducts, getAllProducts } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Hompage.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CircularProgress } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../Components/Card/Card";
import { Navigate, useNavigate } from "react-router-dom";
// import { isMobile, isTablet } from 'react-device-detect';

const Homepage = () => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const reducer = useSelector((store: any) => store.reducer);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(categoryProducts());
  }, []);


  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 768;  
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  let images = [
    "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
    "https://th.bing.com/th/id/R.76fc452da5c43dfd56d5ecb16d2bfaee?rik=O3qywCkjVryi5Q&riu=http%3a%2f%2fcitywestshoppingcentre.com%2fapp%2fuploads%2f2017%2f04%2fWoman-Shopping-Banner.jpg&ehk=f51KA0DgiwyUWBfb1HSSlawurrqZaQVx%2fMpZlmiBwy8%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.0ab6e848a8395fe4e95572437a644b0a?rik=AJSrU%2fNrEmp1Tw&riu=http%3a%2f%2fwww.istmagazine.com%2fwp-content%2fuploads%2f2017%2f07%2froadnotes-01-082017.jpg&ehk=XOQkxoF%2fZla97zYzRWsTGP9xZXDKf1ZYnTILxdKActc%3d&risl=&pid=ImgRaw&r=0",

"https://assets.wfcdn.com/im/2/resize-h800-w800%5Ecompr-r85/2470/247024141/Bowdoin%20Upholstered%20Wingback%20Platform%20Bed.jpg",
"https://assets.wfcdn.com/im/1/resize-h800-w800%5Ecompr-r85/1180/118067159/Wayfair%20Sleep%E2%84%A2%206%22%20Medium%20Memory%20Foam%20Mattress.jpg",
"https://assets.wfcdn.com/im/1/resize-h800-w800%5Ecompr-r85/1494/149404473/Jaylene%206%20-%20Drawer%20Dresser.jpg"
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
    slidesToShow: isMobile ?1 : isTablet?2: 5,
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
                  // zIndex:"-1",
                  [theme.breakpoints.down("sm")]: {
                    height: "150px",
                    
                  },
                }}
                key={element._id}
                
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
                        src="https://assets.wfcdn.com/im/2/resize-h800-w800%5Ecompr-r85/2640/264067876/Hertford%20Upholstered%20Linen%20Blend%20Accent%20Chair%20with%20Wooden%20Legs%20and%20One%20Pillow.jpg"
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
        <Box className={styles.bestBox}>
          <Box>ALL ITEMS </Box>
          <Box
            className={styles.seemorebox}
            onClick={() => {
              navigate("/product");
            }}
          >
            <Box>See More </Box>
            <KeyboardArrowRightIcon />
          </Box>
        </Box>
        {reducer.getProductsLoading ? (
          <CircularProgress />
        ) : (
          <Box className={styles.allProductDataBox}>
            {reducer.allProducts.map((element: any, i: any) => {
              return (
                <>
                  {i < 10 && (
                    <Box key={i}>
                      <Card element={element} />
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
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
                        src="https://assets.wfcdn.com/im/1/resize-h800-w800%5Ecompr-r85/1536/153619737/Slide-Out%20Shelf%20Made-to-Fit%20Full%20Extension%20Rails.jpg"
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
      <Footer />
    </Box>
  );
};

export default Homepage;
