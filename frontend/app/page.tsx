"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Carousel from "@/components/carousel/Carousel";
import { Box, Paper } from "@mui/material";
import BottomBar from "@/components/bottom-bar/BottomBar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleNavigateBottomBar = (newValue: any) => {
    if (newValue == 0) {
      router.push("/");
    } else if (newValue == 1) {
      router.push("/signup");
    } else {
      router.push("/login");
    }
  };

  return (
    <Box className={styles.homeContainer}>
      <Navbar />
      <Carousel />
      <BottomBar handleNavigateBottomBar={handleNavigateBottomBar} />
    </Box>
  );
}
