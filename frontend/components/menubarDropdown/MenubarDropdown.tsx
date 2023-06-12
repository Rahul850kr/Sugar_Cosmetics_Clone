import React from "react";
import styles from "./MenubarDropdown.module.scss";
import { Box, Popover, Popper, Typography } from "@mui/material";

const MenubarDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  let timeoutId: any;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    clearTimeout(timeoutId);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    timeoutId = setTimeout(() => {
      setAnchorEl(null);
    }, 500);
  };

  const handleContentMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    // Prevent closing the popover when moving cursor onto the content
    clearTimeout(timeoutId);
    setAnchorEl(event.currentTarget);
  };

  const handleContentMouseLeave = () => {
    // Close the popover when moving cursor out of the content
    handlePopoverClose;
  };

  const open = Boolean(anchorEl);

  return (
    <Box className={styles.menubarBox}>
      <Box className={styles.menuBox}>
        <Box
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          className={styles.eachMenuBox}
        >
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
      {/* <Popper open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          The content of the Popper.
        </Box>
      </Popper> */}
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableRestoreFocus
        onClose={handlePopoverClose}
      >
        <Box
          onMouseEnter={handleContentMouseEnter}
          onMouseLeave={handleContentMouseLeave}
          sx={{ p: 1, cursor: "pointer" }}
          onClick={() => {
            console.log("Hello Clicked");
          }}
        >
          I use Popover.
        </Box>
      </Popover>
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
