import React from "react";
import styles from "./Card.module.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Card = ({ element, place }: any) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box className={styles.eachCard}>
        <Box className={styles.imageBox}>
          <img
            className={styles.fixedImg}
            src="https://assets.wfcdn.com/im/2/resize-h800-w800%5Ecompr-r85/2532/253280410/Michiharu%20Upholstered%20Platform%20Bed%20with%20Wingback.jpg"
            alt=""
          />
        </Box>
        <Box className={styles.nescafe}>{element.name}</Box>
        <Box className={styles.sku}>SKU Number: {element.sku}</Box>
        <Box className={styles.nescafe}>
          {" "}
          $
          {place == "searchPage"
            ? element.item_price
            : element.pricing.customerPrice.unitPrice.value}
          /each
        </Box>
        <Box
          className={styles.viewDetails}
          onClick={() => {
            navigate(
              `/details/${element.sku}/${element.name}/${
                place == "searchPage"
                  ? element.item_price
                  : element.pricing.customerPrice.unitPrice.value
              }`
            );
          }}
        >
          View Details
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
