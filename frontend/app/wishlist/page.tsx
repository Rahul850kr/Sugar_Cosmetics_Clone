"use client";
import React, { useContext, useState } from "react";
import styles from "./wishlist.module.scss";
import { Box } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";
import { AppContext } from "@/context/MyContextProvider";
import SingleProduct from "@/components/singleProduct/SingleProduct";

const Wishlist = () => {
  const contextProvider = useContext(AppContext);
  return (
    <Box className={styles.mainContainer}>
      <Navbar />
      <Box className={styles.cardsContainer}>
        {contextProvider.wishlists.map((product: any, index: any) => {
          return <SingleProduct element={product} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default Wishlist;
