import React, { useContext, useEffect } from "react";
import styles from "./Carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AppContext } from "@/context/MyContextProvider";
import { Box, useTheme } from "@mui/material";

const Carousel = () => {
  const { screenUi } = useContext(AppContext);
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
  };

  return (
    <Box className={styles.mainBox}>
      <Slider autoplaySpeed={3000} autoplay={true} {...settings}>
        {screenUi?.carouselData?.map((element: any) => {
          return (
            <Box
              sx={{
                height: "500px",
                [theme.breakpoints.down("sm")]: {
                  height: "150px",
                },
              }}
              key={element._id}
              style={{ width: "100%" }}
            >
              <img
                className={styles.singleSliderImage}
                src={element.imageUrl}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default Carousel;
