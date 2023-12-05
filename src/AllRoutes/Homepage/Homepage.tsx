import React, { useEffect } from 'react'
import {Box,useTheme} from "@mui/material"
import { getAllProducts } from '../../Redux/action'
import { useDispatch } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from "./Hompage.module.css"
import Card from '../../Components/Card/Card'
import Productdetails from '../Productdetails/Productdetails'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Homepage = () => {

const dispatch:any=useDispatch()
const theme = useTheme();

useEffect(()=>{
    dispatch(getAllProducts())
},[])

let images=[
  "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
  "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
  "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",

  "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",
  "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28=",

  "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=Oq4PwfmoyOrSEBc_yELgq3llwUPANOXB2keogwsCO28="
]


const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true
};
  return (
    <Box>
      <Navbar/>
      <Box className={styles.mainBox}>
      <Slider autoplaySpeed={3000} autoplay={true} {...settings}>
        {images.map((element: any) => {
          return (
            <Box
              sx={{
                height: "500px",
                [theme.breakpoints.down("sm")]: {
                  height: "150px",
                },
              }}
              key={element._id}
              style={{ width: "100%" }}
            >
              <img
                className={styles.singleSliderImage}
                src={element}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
<Box className={styles.bestSeller}>
  <Box className={styles.bestBox}>BEST SELLING CATEGORIES</Box>
  <Box className={styles.bestEachBox}>
    <Box className={styles.bestEachBoxes}>
      <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Food and Beverage</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Office Furniture</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Cleaning Products</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Electrical Engineering</Box>
    </Box>
    <Box className={styles.bestEachBoxes}>
    <Box className={styles.bestImageBox}>
        <img  className={styles.bestImages} src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg" alt="" />
      </Box>
      <Box className={styles.bestImageText}>Office Supplies</Box>
    </Box>
  </Box>
</Box>

<Card/>
<Productdetails/>
        <Footer/>
    </Box>
  )
}

export default Homepage