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
  Menu,
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <OutlinedInput
            className={styles.secondNavbarSearchBox}
            placeholder="Search"
            size="small"
          />
          <Box className={styles.searchiconsbox}>
            <SearchIcon />
          </Box>
          <Box className={styles.upload}>Upload</Box>

          <Box className={styles.filter}>
            <Box>Filter</Box>
            <ArrowDropDownIcon />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>

          <Box className={styles.sortby}>
            <Box>Sort By</Box>
            <ArrowDropDownIcon />
          </Box>
        </Box>
        <Box className={styles.secondNavbarBox3}>
          <Box className={styles.categoryBoxes}>
            <Box className={styles.eachcategoryBoxes}>
              <Box>All categories</Box>
              <KeyboardArrowDownIcon />
            </Box>
            <Box className={styles.eachcategoryBoxes}>
              <Box>Fruits</Box>
              <KeyboardArrowDownIcon />
            </Box>
            <Box className={styles.eachcategoryBoxes}>
              <Box>Vegetables</Box>
              <KeyboardArrowDownIcon />
            </Box>
            <Box className={styles.eachcategoryBoxes}>
              <Box>Dairy</Box>
              <KeyboardArrowDownIcon />
            </Box>
            <Box className={styles.eachcategoryBoxes}>
              <Box>Meat & poultry</Box>
              <KeyboardArrowDownIcon />
            </Box>
            <Box className={styles.eachcategoryBoxes}>
              <Box>Sea food</Box>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
