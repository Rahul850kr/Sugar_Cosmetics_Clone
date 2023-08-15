import React, { useContext, useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "@emotion/styled";
import MenubarDropdown from "../menubarDropdown/MenubarDropdown";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "@/context/MyContextProvider";
import { Logout } from "@mui/icons-material";

const Navbar = () => {
  const contextProvider = useContext(AppContext);
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: 14,
      fontWeight: "bold",
    },
  }));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Tooltip title={`${contextProvider.userInfo.name} profile`}>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, color: "white" }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <p style={{ marginRight: "1rem" }}>
                {contextProvider.userInfo.name}
              </p>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 25,
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {contextProvider.userInfo.name[0]}
              </Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          <Box className={styles.loginButton}>
            <AccountCircleIcon />
            <Link href={"/login"}>Login</Link>/
            <Link href={"/signup"}>Register</Link>
          </Box>
        )}
        <Box className={styles.actionButtonsBox}>
          <Box className={styles.wishlistBox}>
            <LightTooltip title="Wishlist">
              <FavoriteBorderIcon className={styles.wishIcon} />
            </LightTooltip>
            <Box className={styles.wishlistCount}>15</Box>
          </Box>
          <LightTooltip title="Cart">
            <AddShoppingCartIcon className={styles.wishIcon} />
          </LightTooltip>
        </Box>
      </nav>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar />
          My Profile
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            contextProvider.handleLogOut();
            handleClose();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <MenubarDropdown />
    </Box>
  );
};

export default Navbar;
