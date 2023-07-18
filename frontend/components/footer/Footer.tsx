import React from "react";
import styles from "./Footer.module.scss";
import { Box } from "@mui/material";
import HeadingOfEachSection from "../HeadingOfEachSection/HeadingOfEachSection";

const Footer = () => {
  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.upperBox}>
        <HeadingOfEachSection
          headingName="LET’S STAY IN TOUCH"
          color="black"
          fontSize="25px"
        />
        <p>
          Get the latest beauty tips straight to your inbox. Can’t wait to
          connect!
        </p>
      </Box>
      <Box className={styles.lowerBox}></Box>
    </Box>
  );
};

export default Footer;
