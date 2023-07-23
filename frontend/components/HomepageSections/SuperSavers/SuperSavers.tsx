import React, { useContext } from "react";
import styles from "./SuperSaver.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

const SuperSavers = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="SUPER SAVERS" color="white" fontSize="22px"  />
      <ProductSlider data={screenUi.superSavers} />
    </Box>
  );
};

export default SuperSavers;
