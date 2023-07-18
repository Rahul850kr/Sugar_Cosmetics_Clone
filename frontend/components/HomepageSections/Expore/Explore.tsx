import React, { useContext } from "react";
import styles from "./Explore.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
  const { screenUi } = useContext(AppContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
  };
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="EXPLORE" color="black" fontSize="22px"  />
      <Box className={styles.sliderContainer}>
        <Slider autoplaySpeed={5000} autoplay={true} {...settings}>
          {screenUi?.explore?.map((element: any) => {
            return (
              <Box className={styles.eachImageBox}>
                <img src={element.imageUrl} alt="" />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Explore;
