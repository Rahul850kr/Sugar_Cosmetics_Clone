import { Box, Button, Text } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import Navbar from '../components/Navbar';
import { SimpleSlider } from '../SimpleSlider/slider';
import styles from "../styles/home.module.css"

const Home = () => {

  return (

    <>
    <Navbar/>
    <SimpleSlider/>

<Box className={styles.best}>

 <Text className={styles.bestsell}>BESTSELLERS</Text>
</Box>


    </>
  )
}

export default Home