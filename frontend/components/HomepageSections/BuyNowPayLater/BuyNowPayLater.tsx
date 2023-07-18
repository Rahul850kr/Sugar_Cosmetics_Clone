import React, { useContext } from "react";
import styles from "./BuyNowPayLater.module.scss";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { AppContext } from "@/context/MyContextProvider";

const BuyNowPayLater = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="BUY NOW PAY LATER" color="black" fontSize="22px"  />
      <ProductSlider data={screenUi.buyNowPayLater} />
    </Box>
  );
};

export default BuyNowPayLater;
