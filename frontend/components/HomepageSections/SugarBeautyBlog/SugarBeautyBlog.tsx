import React, { useContext } from "react";
import styles from "./SugarBeautyBlog.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SugarBeautyBlog = () => {
  const { screenUi } = useContext(AppContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="SUGAR BEAUTY BLOG" color="black" />
      <Box className={styles.sliderContainer}>
        <Slider autoplaySpeed={5000} autoplay={true} {...settings}>
          {screenUi?.sugarBeautyBlog?.map((element: any) => {
            return (
              <Box className={styles.eachImageBox} >
                <img src={element.imageUrl} alt="" />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default SugarBeautyBlog;
