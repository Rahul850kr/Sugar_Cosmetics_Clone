import React from "react";
import styles from "./ProductSlider.module.scss";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleProduct from "../singleProduct/SingleProduct";

const ProductSlider = ({ data }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <Box className={styles.sliderContainer}>
      <Slider autoplaySpeed={4000} autoplay={true} {...settings}>
        {data?.map((element: any) => {
          return <SingleProduct element={element} />;
        })}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
