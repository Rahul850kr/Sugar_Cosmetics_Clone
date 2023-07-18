import React, { useContext } from "react";
import styles from "./ThisOrThat.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";

const ThisOrThat = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="THIS OR THAT" color="black" />
      <Box className={styles.imageContent}>
        {screenUi?.thisOrThat?.map((element: any, index: number) => {
          return (
            <Box className={styles.eachImageBox} key={index}>
              <img src={element.imageUrl} alt="" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ThisOrThat;
