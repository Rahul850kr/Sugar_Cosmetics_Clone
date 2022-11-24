import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/signup.module.css";

const Signup = () => {
  return (
    <Box className={styles.mainDiv}>
      <Box className={styles.left}></Box>
      <Box className={styles.right}>
        <Box className={styles.backArrowDiv}>
          <Link to="/loginOrsignup">
            <i className="fa-solid fa-arrow-left" id={styles.backArrow}></i>
          </Link>
        </Box>
        <Box mt="2rem">
            <Text className={styles.formHead}>Please fill this form below</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
