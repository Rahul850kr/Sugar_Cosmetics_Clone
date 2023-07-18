"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Carousel from "@/components/carousel/Carousel";
import { Box, CircularProgress, Paper } from "@mui/material";
import BottomBar from "@/components/bottom-bar/BottomBar";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/MyContextProvider";
import BestSellers from "@/components/HomepageSections/BestSellers/BestSellers";
import HotDeals from "@/components/HomepageSections/HotDeals/HotDeals";
import JustIn from "@/components/HomepageSections/JustIn/JustIn";
import TopPicks from "@/components/HomepageSections/TopPicks/TopPicks";
import BuyNowPayLater from "@/components/HomepageSections/BuyNowPayLater/BuyNowPayLater";
import Giftings from "@/components/HomepageSections/Giftings/Giftings";
import Refering from "@/components/HomepageSections/Refering/Refering";
import SuperSavers from "@/components/HomepageSections/SuperSavers/SuperSavers";
import NewlyLaunched from "@/components/HomepageSections/NewlyLaunched/NewlyLaunched";
import ThisOrThat from "@/components/HomepageSections/ThisOrThat/ThisOrThat";
import SkinCareBasics from "@/components/HomepageSections/SkinCareBasics/SkinCareBasics";
import SugarBeautyBlog from "@/components/HomepageSections/SugarBeautyBlog/SugarBeautyBlog";
import Explore from "@/components/HomepageSections/Expore/Explore";

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
          <BestSellers />
          <HotDeals />
          <JustIn />
          <TopPicks />
          <BuyNowPayLater />
          <Giftings />
          <Refering />
          <SuperSavers />
          <NewlyLaunched />
          <ThisOrThat />
          <SkinCareBasics />
          <SugarBeautyBlog />
          <Explore />
          <BottomBar handleNavigateBottomBar={handleNavigateBottomBar} />
        </Box>
      )}
    </Box>
  );
}
