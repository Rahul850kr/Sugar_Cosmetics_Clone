import React, { useContext, useState } from "react";
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
import { AppContext } from "@/context/MyContextProvider";
// import Cookies from 'js-cookie';

const Navbar = () => {
  const contextProvider = useContext(AppContext);
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

  // console.log(contextProvider.userInfo.name);

  return (
    <Box width={"100%"}>
      <nav className={styles.navbarContainer}>
        <Box className={styles.hamburgerBox}>
          <MenuIcon className={styles.hamburger} />
        </Box>
        <Link href={"/"}>
          <img
            src="	https://d32baadbbpueqt.cloudfront.net/Logo/636b4da7-4c87-4b54-9b5d-e3cf31ba292a.gif"
            alt=""
            className={styles.logo}
          />
        </Link>
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
        {contextProvider.isAuth ? (
          <p style={{ color: "white" }}>{contextProvider.userInfo.name}</p>
        ) : (
          <Box className={styles.loginButton}>
            <AccountCircleIcon />
            <Link href={"/login"}>Login</Link>/
            <Link href={"/signup"}>Register</Link>
          </Box>
        )}
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
