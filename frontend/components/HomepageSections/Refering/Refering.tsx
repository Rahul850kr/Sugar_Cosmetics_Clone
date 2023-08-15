import React, { useContext } from "react";
import styles from "./Refering.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";

const Refering = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection
        headingName="REFER YOUR FRIENDS"
        color="black"
        fontSize="22px"
      />
      <Box className={styles.imageBox}>
        {screenUi?.referBanner && (
          <img src={screenUi?.referBanner[0]["banner"]} alt="banner" />
        )}
      </Box>
    </Box>
  );
};

export default Refering;
