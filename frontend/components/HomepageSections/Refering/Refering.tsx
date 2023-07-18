import React, { useContext } from "react";
import styles from "./Refering.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";

const Refering = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="REFER YOUR FRIENDS" color="black" />
      <Box className={styles.imageBox}>
        <img src={screenUi.referBanner} alt="banner" />
      </Box>
    </Box>
  );
};

export default Refering;
