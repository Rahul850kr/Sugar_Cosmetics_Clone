import React, { useContext } from "react";
import styles from "./BestSellers.module.scss";
import { Box } from "@mui/material";
import HeadingOfEachSection from "../../HeadingOfEachSection/HeadingOfEachSection";
import ProductSlider from "../../ProductSlider/ProductSlider";
import { AppContext } from "@/context/MyContextProvider";

const BestSellers = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.productSliderContainer}>
      <HeadingOfEachSection headingName="BESTSELLERS" color="white" fontSize="22px" />
      <ProductSlider data={screenUi.bestSellers} />
    </Box>
  );
};

export default BestSellers;
