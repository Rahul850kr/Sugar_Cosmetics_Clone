import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { Box, Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "@emotion/styled";
import MenubarDropdown from "../menubarDropdown/MenubarDropdown";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: "rgba(0, 0, 0, 0.87)",
      // boxShadow: theme.shadows[1],
      fontSize: 14,
      fontWeight: "bold",
    },
  }));

  return (
    <Box width={"100%"}>
      <nav className={styles.navbarContainer}>
        <Box className={styles.hamburgerBox} >
          <MenuIcon className={styles.hamburger} />
        </Box>
        <img
          src="https://cdn.sanity.io/images/gxmub2ol/production/98a9ebae1456c75c727d5fab8c934dae908a144c-1493x380.png"
          alt=""
          className={styles.logo}
        />
        <Box className={styles.searchBox}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Try 'Liquid Lipstick'"
          />
          <Box className={styles.searchTextBox}>
            <SearchIcon />
            Search
          </Box>
        </Box>
        <Box className={styles.loginButton}>
          <AccountCircleIcon />
          <Link href={"/login"}>Login</Link>/
          <Link href={"/signup"}>Register</Link>
        </Box>
        <Box className={styles.actionButtonsBox}>
          <LightTooltip title="Wishlist">
            <FavoriteBorderIcon className={styles.wishIcon} />
          </LightTooltip>
          <LightTooltip title="Cart">
            <AddShoppingCartIcon className={styles.wishIcon} />
          </LightTooltip>
        </Box>
      </nav>
      <MenubarDropdown />
    </Box>
  );
};

export default Navbar;
