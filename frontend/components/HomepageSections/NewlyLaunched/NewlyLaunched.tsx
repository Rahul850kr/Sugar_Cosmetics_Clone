import React, { useContext } from "react";
import styles from "./NewlyLaunched.module.scss";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";
import HeadingOfEachSection from "@/components/HeadingOfEachSection/HeadingOfEachSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewlyLaunched = () => {
  const { screenUi } = useContext(AppContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Box className={styles.mainContainer}>
      <HeadingOfEachSection headingName="NEWLY LAUNCHED" color="black" fontSize="22px"  />
      <Box className={styles.sliderContainer}>
        <Slider autoplaySpeed={5000} autoplay={true} {...settings}>
          {screenUi?.newlyLaunched?.map((element: any) => {
            return <img src={element.imageUrl} alt="" />;
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default NewlyLaunched;
