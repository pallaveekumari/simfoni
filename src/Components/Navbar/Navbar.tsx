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
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import styles from "./Navbar.module.css";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { handleFetchSearchData, searchProducts,handleSortData } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  let reducer = useSelector((store: any) => store.reducer);
  const open = Boolean(anchorEl);
  const [text, setText] = useState("");
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: any) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleSelectOption = (el: any) => {
    navigate(`/details/${el.sku}`);
  };

  const handleSearchByButton = async () => {
    await dispatch(searchProducts(text));
    navigate("/search");
  };

  const handleSort = async (type: any) => {
    let res = await handleFetchSearchData("room");
    if (type == "atoz") {
      let newData = res.sort((a: any, b: any) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      dispatch(handleSortData(newData));
    } else if (type == "ztoa") {
      let newData = res.sort((a: any, b: any) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      dispatch(handleSortData(newData));
    } else if (type == "lth") {
      let newData = res.sort((a: any, b: any) => {
        if (a.item_price < b.item_price) return -1;
        if (a.item_price > b.item_price) return 1;
        return 0;
      });
      dispatch(handleSortData(newData));
    } else if (type == "htl") {
      let newData = res.sort((a: any, b: any) => {
        if (a.item_price > b.item_price) return -1;
        if (a.item_price < b.item_price) return 1;
        return 0;
      });
      dispatch(handleSortData(newData));
    }
  };
 
 

  useEffect(() => {
    
    const debouncedSearch = debounce((query: string) => {
      dispatch(searchProducts(query));
    }, 3000);

    if (text != "") {
      debouncedSearch(text);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [text]);

  return (
    <Box>
      <Box className={styles.catalogNavbar}>
        <Box className={styles.innerBoxNav}>
          <Box className={styles.innerLogoBoxNav}>
            <DehazeOutlinedIcon />
            <img
            
              className={styles.logo}
              src="https://simfoni.com/wp-content/uploads/2021/10/Simfoni.com-Logo.jpg"
              onClick={() => {
                navigate("/");
              }}
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
            onChange={(e) => setText(e.target.value)}
            className={styles.secondNavbarSearchBox}
            placeholder="Search"
            size="small"
          />

        
          {reducer.searchLoading ? (
            <Box className={styles.recomendationBox}>
              <CircularProgress />
            </Box>
          ) : (
            <Box className={styles.recomendationBox}>
              {reducer.searchedData.map((el: any, i: any) => {
                return (
                  <Box
                    key={i}
                    onClick={() => {
                      handleSelectOption(el);
                    }}
                    className={styles.listItem}
                  >
                    {el.name}
                  </Box>
                );
              })}
            </Box>
          )}
          <Box className={styles.searchiconsbox} onClick={handleSearchByButton}>
            <SearchIcon />
          </Box>
          <Box className={styles.upload}>Upload</Box>

          <Box className={styles.filter} onClick={handleClick}>
            <Box>Filter</Box>
            <ArrowDropDownIcon />
          </Box>
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

          <Box className={styles.sortby} onClick={handleClick1}>
            <Box>Sort By</Box>
            <ArrowDropDownIcon />
          </Box>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl1}
            open={open1}
            onClose={handleClose1}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
           <MenuItem
         onClick={() => {
           handleSort("atoz");
           navigate("/search");
         }}
       >
         A TO Z
       </MenuItem>
       <MenuItem
         onClick={() => {
           handleSort("ztoa");
           navigate("/search");
         }}
       >
         Z TO A
       </MenuItem>
       <MenuItem
         onClick={() => {
           handleSort("htl");
           navigate("/search");
         }}
       >
         Price : High to low
       </MenuItem>
       <MenuItem
         onClick={() => {
           handleSort("lth");
           navigate("/search");
         }}
       >
         Price : Low to high
       </MenuItem>
          </Menu>
        </Box>
        <Box className={styles.secondNavbarBox3}>
          <Box className={styles.categoryBoxes}>
            <Box className={styles.eachcategoryBoxes} onClick={handleClick2}>
              <Box>All categories</Box>
              <KeyboardArrowDownIcon />
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose2}>Beverages</MenuItem>
              <MenuItem onClick={handleClose2}>Cleaning Supplies</MenuItem>
              <MenuItem onClick={handleClose2}>Food & Beverage</MenuItem>
              <MenuItem onClick={handleClose2}>Medical Equipment & Supplies</MenuItem>
              <MenuItem onClick={handleClose2}>Office Supplies</MenuItem>
            </Menu>
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
