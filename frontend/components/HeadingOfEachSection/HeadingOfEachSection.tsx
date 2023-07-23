import React from "react";
import styles from "./HeadingOfEach Section.module.scss";
import { Box } from "@mui/material";

const HeadingOfEachSection = ({ headingName, color,fontSize }: any) => {
  return (
    <Box className={styles.heading}>
      <hr />
      <p style={{ color: color,fontSize:fontSize }}>{headingName}</p>
      <hr />
    </Box>
  );
};

export default HeadingOfEachSection;
