import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/logsign.module.css";
import { Link } from "react-router-dom";

const LogSign = () => {
  return (
    <Box className={styles.mainDiv}>
      <Box className={styles.left}></Box>
      <Box className={styles.right}>
        <Box className={styles.backArrowDiv}>
          <Link to="/">
            <i className="fa-solid fa-arrow-left" id={styles.backArrow}></i>
          </Link>
        </Box>
        <Box className={styles.hiDiv}>
          <Image
            className={styles.hi}
            src="https://media.sugarcosmetics.com/upload/Hi!.png"
          />
        </Box>
        <Text className={styles.head}>Login/Sign Up Using Phone</Text>
        <form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

  </fieldset>
</form>
      </Box>
    </Box>
  );
};

export default LogSign;
