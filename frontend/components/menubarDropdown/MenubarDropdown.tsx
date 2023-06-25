import React from "react";
import styles from "./MenubarDropdown.module.scss";
import { Box, Popover, Popper, Typography } from "@mui/material";

const MenubarDropdown = () => {
  return (
    <Box className={styles.menubarBox}>
      <Box className={styles.menuBox}>
        <Box className={styles.eachMenuBox}>
          <p>LIPS</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>EYES</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>FACE</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>NAILS</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>SKINCARE</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>ACCESSORIES</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>GIFTS & KITS</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>BEST SELLERS</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>NEW LAUNCHES</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>OFFERS</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>BLOG</p>
        </Box>
        <Box className={styles.eachMenuBox}>
          <p>STORES</p>
        </Box>
      </Box>
    </Box>
  );
};

export default MenubarDropdown;

// <Box>
// <Button
//   id="basic-button"
//   aria-controls={open ? "basic-menu" : undefined}
//   aria-haspopup="true"
//   aria-expanded={open ? "true" : undefined}
//   onClick={handleClick}
// >
//   Dashboard
// </Button>
// </Box>
