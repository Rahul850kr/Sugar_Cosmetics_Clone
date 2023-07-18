import React, { useContext } from "react";
import styles from "./TopPicks.module.scss";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import { AppContext } from "@/context/MyContextProvider";

const TopPicks = () => {
  const { screenUi } = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection
        headingName="TOP PICKS OF THE WEEK"
        color="black"
        fontSize="22px"
      />
      <Box className={styles.imageContent}>
        {screenUi?.topPicks?.map((element: any, index: number) => {
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

export default TopPicks;
