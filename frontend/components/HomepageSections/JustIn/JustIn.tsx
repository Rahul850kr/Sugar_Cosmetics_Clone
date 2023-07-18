import React, { useContext } from "react";
import styles from "./JustIn.module.scss";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import { AppContext } from "@/context/MyContextProvider";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

const JustIn = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="JUST-IN" color="black" />
      <ProductSlider data={screenUi.justIn} />
    </Box>
  );
};

export default JustIn;
