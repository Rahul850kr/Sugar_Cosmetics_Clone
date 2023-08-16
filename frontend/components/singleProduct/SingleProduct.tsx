import React, { useContext, useEffect, useState } from "react";
import styles from "./singleProduct.module.scss";
import { Box } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppContext } from "@/context/MyContextProvider";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const SingleProduct = ({ element, place }: any) => {
  const contextProvider = useContext(AppContext);
  const [wished, setWished] = useState<boolean>(false);
  const router = useRouter();
  const handleClickWishlist = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/login");
      } else {
        setWished(true);
        let res = await contextProvider.handleAddWishlist(element, token);
        if (res == "Item Already In The Wishlist") {
          console.log("enters");
          setWished(false);
          contextProvider.setSnackBarContent({
            status: "success",
            text: "Item Removed From Wishlist",
          });
          contextProvider.setSnackbarOpen(true);
          console.log("here reached");
          await contextProvider.handleRemoveWishlist(element._id, token);
        }
        await contextProvider.handleGetWishlists(token);
      }
    } catch (err) {
      console.log("Something Went Wrong");
    }
  };

  useEffect(() => {
    for (let i = 0; i < contextProvider.wishlists.length; i++) {
      if (element._id == contextProvider.wishlists[i]["_id"]) {
        setWished(true);
        break;
      } else {
        setWished(false);
      }
    }
  }, []);
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
          {wished ? (
            <FavoriteIcon fontSize="small" className={styles.favouriteIcon} />
          ) : (
            <FavoriteBorderIcon
              fontSize="small"
              className={styles.favouriteIcon}
            />
          )}
        </Box>
        <Box className={styles.buttonBox}>
          <p className={styles.buttonText}>
            {place == "wishlist" ? "Add To Cart" : element.buttonText}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
