import React from "react";
import { Box } from "@mui/material";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <Box>
      <Box className={styles.footerBox}>
        <Box className={styles.peopleBox}>PEOPLE SEARCHING FOR</Box>
        <Box className={styles.footBox1}>
          <Box className={styles.footEachBox}>Construction Helmet</Box>
          <Box className={styles.footEachBox}>Saws</Box>
          <Box className={styles.footEachBox}>Cider</Box>
          <Box className={styles.footEachBox}>Apple Juice</Box>
          <Box className={styles.footEachBox}>Construction Costume blue</Box>
          <Box className={styles.footEachBox}>Tapes</Box>
          <Box className={styles.footEachBox}>Construction suit</Box>
          <Box className={styles.footEachBox}>Pullers</Box>
          <Box className={styles.footEachBox}>Pickaxes and Crowbars</Box>
        </Box>
        <Box className={styles.footBox1}>
          <Box className={styles.footEachBox}>Carrots</Box>
          <Box className={styles.footEachBox}>Construction hammer</Box>
          <Box className={styles.footEachBox}>Wrenches</Box>
          <Box className={styles.footEachBox}>Screwdrivers</Box>
          <Box className={styles.footEachBox}>Construction Shovels</Box>
          <Box className={styles.footEachBox}>Construction Costume blue</Box>
          <Box className={styles.footEachBox}>Pullers</Box>
          <Box className={styles.footEachBox}>Kinoa</Box>
          <Box className={styles.footEachBox}>Banana</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
