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
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7fca5ce2-13ca-41df-b6d0-4d85bf1fc683.jpg&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F68f08a82-11d2-4a78-9e24-6be7c4c25528.jpg&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fce9777ae-2e4a-448b-bbd0-4a8fe4b7e5d2.jpg&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F106a1a33-6429-4357-96a1-1117d5ead2eb.jpg&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Feb4bdbe1-75fe-4237-b5c9-22a74dc62713.gif&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F00b45703-3828-491d-ad83-30e96135b966.gif&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1f136bbe-57d1-4674-9e2f-0c76e4043793.jpg&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc4330bb4-0609-45f9-8f50-caa901712521.jpg&w=1920&q=75"
        />
      </div>
      <div style={{ width: "100%" }}>
        <img
          className={styles.singleSliderImage}
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9723d8e3-9e99-459f-acfe-4ef93089e9ef.jpg&w=1920&q=75"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
