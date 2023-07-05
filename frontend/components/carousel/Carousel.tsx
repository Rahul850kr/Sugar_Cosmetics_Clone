import React, { useContext, useEffect } from "react";
import styles from "./Carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "@/context/MyContextProvider";
import { Box } from "@mui/material";

const Carousel = () => {
  const { carouselImages, handleGetCarouselImages } = useContext(AppContext);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    handleGetCarouselImages();
  }, []);
  return (
    <Slider autoplaySpeed={3000} autoplay={true} {...settings}>
      {carouselImages.map((element: any, index) => {
        return (
          <Box key={element._id} style={{ width: "100%" }}>
            <img className={styles.singleSliderImage} src={element.imageUrl} />
          </Box>
        );
      })}
    </Slider>
  );
};

export default Carousel;
