import React, { useContext } from "react";
import styles from "./Giftings.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

const Giftings = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="GIFTING" color="black" />
      <ProductSlider data={screenUi.giftings} />
    </Box>
  );
};

export default Giftings;
