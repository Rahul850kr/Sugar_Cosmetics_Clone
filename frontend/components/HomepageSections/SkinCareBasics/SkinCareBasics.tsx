import React, { useContext } from "react";
import styles from "./SkinCareBasics.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

const SkinCareBasics = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="SKINCARE BASICS" color="black" />
      <ProductSlider data={screenUi.skinCareBasics} />
    </Box>
  );
};

export default SkinCareBasics;
