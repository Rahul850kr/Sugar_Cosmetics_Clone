import React from "react";
import styles from "./HeadingOfEach Section.module.scss";
import { Box } from "@mui/material";

const HeadingOfEachSection = ({ headingName, color }: any) => {
  return (
    <Box className={styles.heading}>
      <hr />
      <p style={{ color: color }}>{headingName}</p>
      <hr />
    </Box>
  );
};

export default HeadingOfEachSection;
