import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";

const Navbar = () => {
  return (
    <Box>
      <Box className={styles.catalogNavbar}>
        <Box className={styles.innerBoxNav}>
          <Box className={styles.innerLogoBoxNav}>
            <DehazeOutlinedIcon />
            <img
              className={styles.logo}
              src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg"
            />
          </Box>
          <Box className={styles.catalogBox}>
          <Typography variant="body2" className={styles.catalogText}>Catalog</Typography>
          <Typography variant="body2">BuyDesk</Typography>
          <Typography variant="body2">History</Typography>
          <Typography variant="body2">Dashboard</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
