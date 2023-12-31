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
  Autocomplete,
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
import * as types from "../../Redux/actionTypes";
import {
  handleFetchSearchData,
  searchProducts,
  handleSortData,
  getFilterData,
} from "../../Redux/action";
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
    navigate(`/details/${el.sku}/${el.name}/${el["item_price"]}`);
  };

  const handleSearchByButton = async () => {
    await dispatch(searchProducts(text));
    navigate("/search");
  };

  const handleSort = async (type: any) => {
    dispatch({ type: types.SEARCH_PRODUCT_REQUEST });
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

  const handleFilterData = async (type: any) => {
    dispatch({ type: types.SEARCH_PRODUCT_REQUEST });
    let res = await handleFetchSearchData("room");
    if (type == "1") {
      let newData = res.filter(
        (data: any) => data.item_price > 0 && data.item_price < 100
      );
      dispatch(getFilterData(newData));
    } else if (type == "2") {
      let newData = res.filter(
        (data: any) => data.item_price > 101 && data.item_price < 200
      );
      dispatch(getFilterData(newData));
    } else if (type == "3") {
      let newData = res.filter(
        (data: any) => data.item_price > 201 && data.item_price < 300
      );
      dispatch(getFilterData(newData));
    } else if (type == "4") {
      let newData = res.filter(
        (data: any) => data.item_price > 301 && data.item_price < 400
      );
      dispatch(getFilterData(newData));
    } else if (type == "5") {
      let newData = res.filter(
        (data: any) => data.item_price > 401 && data.item_price < 500
      );
      dispatch(getFilterData(newData));
    } else if (type == "6") {
      let newData = res.filter(
        (data: any) => data.item_price > 501 && data.item_price < 600
      );
      dispatch(getFilterData(newData));
    } else if (type == "7") {
      let newData = res.filter(
        (data: any) => data.item_price > 601 && data.item_price < 700
      );
      dispatch(getFilterData(newData));
    } else if (type == "8") {
      let newData = res.filter(
        (data: any) => data.item_price > 701 && data.item_price < 800
      );
      dispatch(getFilterData(newData));
    } else if (type == "9") {
      let newData = res.filter(
        (data: any) => data.item_price > 801 && data.item_price < 900
      );
      dispatch(getFilterData(newData));
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
    <Box className={styles.mainConatainer}>
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
          <Box className={styles.firstNavSearch}>
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
          <Autocomplete
            className={styles.secondNavbarSearchBox}
            size="small"
            sx={{ width: "55%" }}
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option: any) => option.name}
            onChange={(event, selectedOption) =>
              handleSelectOption(selectedOption)
            }
            options={reducer.searchedData}
            renderInput={(params) => (
              <TextField
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
                {...params}
              />
            )}
          />
          {reducer.searchLoading && <CircularProgress />}

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
            <MenuItem
              onClick={() => {
                handleFilterData("1");
                navigate("/search");
              }}
              value="1"
            >
              Price : 0-100
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("2");
                navigate("/search");
              }}
              value="2"
            >
              Price : 101-200
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("3");
                navigate("/search");
              }}
              value="3"
            >
              Price : 201-300
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("4");
                navigate("/search");
              }}
              value="4"
            >
              Price : 301-400
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("5");
                navigate("/search");
              }}
              value="5"
            >
              Price : 401-500
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("6");
                navigate("/search");
              }}
              value="6"
            >
              Price : 501-600
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("7");
                navigate("/search");
              }}
              value="7"
            >
              Price : 601-700
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("8");
                navigate("/search");
              }}
              value="8"
            >
              Price : 701-800
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleFilterData("9");
                navigate("/search");
              }}
              value="9"
            >
              Price : 801-900
            </MenuItem>
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
              Title: From A TO Z
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleSort("ztoa");
                navigate("/search");
              }}
            >
              Title: From Z TO A
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
              <MenuItem onClick={handleClose2}>
                Medical Equipment & Supplies
              </MenuItem>
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
