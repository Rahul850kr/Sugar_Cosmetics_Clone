"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Carousel from "@/components/carousel/Carousel";
import { Box, CircularProgress, Paper } from "@mui/material";
import BottomBar from "@/components/bottom-bar/BottomBar";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/MyContextProvider";

export default function Home() {
  const [pageLoader, setPageLoader] = useState(false);
  const { screenUi, handleGetHomeScreenUi } = useContext(AppContext);
  const router = useRouter();

  const handleNavigateBottomBar = (newValue: any) => {
    if (newValue == 0) {
      router.push("/");
    } else if (newValue == 1) {
      router.push("/categories");
    } else {
      router.push("/login");
    }
  };

  const fetchScreenUi = async () => {
    setPageLoader(true);
    await handleGetHomeScreenUi();
    setPageLoader(false);
  };

  useEffect(() => {
    fetchScreenUi();
  }, []);

  return (
    <Box className={styles.homeContainer}>
      {pageLoader ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {" "}
          <Navbar />
          <Carousel />
          <BottomBar handleNavigateBottomBar={handleNavigateBottomBar} />
        </Box>
      )}
    </Box>
  );
}
