"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Carousel from "@/components/carousel/Carousel";
import { Box } from "../lib/mui";

export default function Home() {
  return (
    <Box className={styles.homeContainer}>
      <Navbar />
      <Carousel />
    </Box>
  );
}
