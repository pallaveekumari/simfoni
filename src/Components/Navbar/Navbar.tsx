import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  Avatar,
  MenuItem,
  Menu
} from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Navbar = () => {

  
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  }



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
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold" }}
              className={styles.catalogText}
            >
              Catalog
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              BuyDesk
            </Typography>
            <Box className={styles.historyDropdown}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                History{" "}
              </Typography>
              <ArrowDropDownIcon />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Dashboard
            </Typography>
          </Box>
        </Box>

        <Box className={styles.poBox}>
          <Box className={styles.historyDropdownMenu}>
            <Box>PO</Box>
            <ArrowDropDownIcon />
          </Box>
          <Box>
            <FormControl sx={{ width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                size="small"
                placeholder="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box className={styles.help}>Help</Box>
          <Box className={styles.IconBoxes}>
            <FolderOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <ShoppingCartOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
          </Box>
          <Box className={styles.avtar}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box>Sara Green</Box>
            <ArrowDropDownIcon />
          </Box>
        </Box>
      </Box>

      <Box className={styles.secondNavbar}>
        <Box className={styles.secondNavbarBox1}>
          <Box className={styles.purchase}>
            <Box>Purchase organization</Box>
            <ArrowDropDownIcon />
          </Box>
          <Box className={styles.company}>
            <Box>Company</Box>
            <ArrowDropDownIcon />
          </Box>
          <Box className={styles.plant}>
            <Box>Plant</Box>
            <ArrowDropDownIcon />
          </Box>
        </Box>

        <Box className={styles.secondNavbarBox2}>
          <OutlinedInput className={styles.secondNavbarSearchBox} placeholder="Search" size="small" />
          <Box className={styles.searchiconsbox}>
          <SearchIcon/>

        

          </Box>
          <Box className={styles.upload}>Upload</Box>

          <Box className={styles.filter} onClick={handleClick1}>
            <Box>Filter</Box>
            <ArrowDropDownIcon   />
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose1}>Profile</MenuItem>
        <MenuItem onClick={handleClose1}>My account</MenuItem>
        <MenuItem onClick={handleClose1}>Logout</MenuItem>
      </Menu>
          </Box>

          <Box className={styles.sortby}>
            <Box>Sort By</Box>
            <ArrowDropDownIcon />
           
          </Box>
        </Box>
        <Box className={styles.secondNavbarBox3}></Box>
      </Box>
    </Box>
  );
};

export default Navbar;
