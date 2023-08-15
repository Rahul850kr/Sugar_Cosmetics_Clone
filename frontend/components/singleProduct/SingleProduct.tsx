import React, { useContext } from "react";
import styles from "./singleProduct.module.scss";
import { Box } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppContext } from "@/context/MyContextProvider";
import Cookies from "js-cookie";

const SingleProduct = ({ element }: any) => {
  const contextProvider = useContext(AppContext);

  const handleClickWishlist = async () => {
    try {
      const token = Cookies.get("token");
      await contextProvider.handleAddWishlist(element, token);
      await contextProvider.handleGetWishlists(token);
    } catch (err) {
      console.log("Something Went Wrong");
    }
  };
  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.imageBox}>
        <img src={element.imageUrl} alt="product" />
      </Box>
      <Box className={styles.contentBox}>
        <p>{element.name}</p>
        <Box className={styles.priceShadeBox}>
          {element.shadesAvailable ? (
            <Box className={styles.shadesContainer}>
              <PaletteIcon className={styles.pallete} />
              {element.shadesCount} shades
            </Box>
          ) : null}
          <Box className={styles.priceBox}>
            {element.strikedPriceAvailable ? (
              <p className={styles.strikedPrice}>{element.strikedPrice}</p>
            ) : null}
            <p className={styles.price}>&#8377; {element.price}</p>
            {element.offAvailable ? (
              <p className={styles.discount}>({element.discoount}% off)</p>
            ) : null}
          </Box>
        </Box>
      </Box>
      <Box className={styles.addCartWishlistBox}>
        <Box className={styles.wishlistBox} onClick={handleClickWishlist}>
          <FavoriteBorderIcon
            fontSize="small"
            className={styles.favouriteIcon}
          />
        </Box>
        <Box className={styles.buttonBox}>
          <p className={styles.buttonText}>{element.buttonText}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
