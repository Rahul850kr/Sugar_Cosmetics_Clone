import React from "react";
import styles from "./Carousel.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      autoplaySpeed={3000}
      autoplay={true}
      {...settings}
    >
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src=""
        />
      </div>
    </Slider>
  );
};

export default Carousel;
