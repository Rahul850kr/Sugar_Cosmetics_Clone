import React, { useContext } from "react";
import styles from "./HotDeals.module.scss";
import { Box } from "@mui/material";
import HeadingOfEachSection from "../../HeadingOfEachSection/HeadingOfEachSection";
import { AppContext } from "@/context/MyContextProvider";

const HotDeals = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="HOT DEALS" color="black" fontSize="22px"  />
      <Box className={styles.imageContent}>
        {screenUi?.hotDeals?.map((element: any, index: number) => {
          return (
            <Box key={index}>
              <img src={element.imageUrl} alt="" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HotDeals;
