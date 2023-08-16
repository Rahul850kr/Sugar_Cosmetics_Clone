"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./wishlist.module.scss";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";
import { AppContext } from "@/context/MyContextProvider";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import Footer from "@/components/footer/Footer";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Wishlist = () => {
  const contextProvider = useContext(AppContext);
  const router = useRouter();

  const firstCall = async (token: any) => {
    await contextProvider.handleSetIsAuth(true);
    await contextProvider.handleGetUserInfo(token);
    await contextProvider.handleGetWishlists(token);
  };
  useEffect(() => {
    let token = Cookies.get("token");
    if (!token) {
      router.push("/login");
    } else {
      firstCall(token);
    }
  }, []);
  return (
    <Box className={styles.mainContainer}>
      <Navbar />
      {contextProvider.wishlists.length == 0 ? (
        <Box className={styles.emptyWishBox}>
          <img
            src="https://in.sugarcosmetics.com/desc-images/WishlistEmpty.png"
            alt=""
          />
          <Typography className={styles.emptyText}>
            Your wishlist is empty
          </Typography>
        </Box>
      ) : (
        <Box className={styles.cardsContainer}>
          {contextProvider.wishlists.map((product: any, index: any) => {
            return (
              <SingleProduct element={product} key={index} place="wishlist" />
            );
          })}
        </Box>
      )}
      <Footer />
      <Snackbar
        open={contextProvider.snackbarOpen}
        autoHideDuration={6000}
        onClose={contextProvider.handleCloseSnackBar}
      >
        <Alert
          onClose={contextProvider.handleCloseSnackBar}
          variant="filled"
          severity={contextProvider.snackBarContent.status}
          sx={{ width: "100%" }}
        >
          {contextProvider.snackBarContent.text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Wishlist;
