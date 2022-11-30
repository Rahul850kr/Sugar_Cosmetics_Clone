import { Box, Button, Img, Text } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import Navbar from '../components/Navbar';
import { SimpleSlider } from '../SimpleSlider/slider';
import styles from "../styles/home.module.css"
import { HomeSlider } from '../HomeSlider/sliderhome';
import { JustSlider } from '../components/JustSlider/just';
import { Gifting } from '../components/Gifting/gifting';
import { Newly } from '../components/Newly/newly';

const Home = () => {

  return (

    <>
    <Navbar/>
    <SimpleSlider/>

<Box className={styles.best}>

 <Text className={styles.bestsell}>BESTSELLERS</Text>

 <Box className={styles.sli}>
     <HomeSlider/>
 </Box>
</Box>

<Text>Hot Deals</Text>
<Box className={styles.hot}>

<Box className={styles.hotdeals}>
  <Img className={styles.hotdealsimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/d9560110-40f7-4d14-a98d-5599b45a84ef.jpg"/>
</Box>
<Box className={styles.hotdeals}>
  <Img className={styles.hotdealsimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/fb82e32a-164e-432a-af89-b6593001d384.jpg"/>
</Box>
<Box className={styles.hotdeals}>
  <Img className={styles.hotdealsimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/043d43d2-66eb-4d93-b725-a3d948ca3871.jpg"/>
</Box>

</Box>


<Text>JUST IN</Text>
<Box className={styles.slid} >
<JustSlider/>
</Box>





  <Text>SHUKAR HAI, SUGAR HAI</Text>
  <Box className={styles.sug}>
<Img className={styles.sugimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg"/>
  </Box>


  <Text>TOP PICKS OF THE WEEK</Text>
<Box className={styles.hot}>

<Box className={styles.hotdeals}>
  <Img className={styles.hotdealsimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/4849cf44-c55c-4224-ba06-9dd0a5f48b67.gif"/>
</Box>
<Box className={styles.hotdeals}>
  <Img className={styles.hotdealsimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg"/>
</Box>
<Box className={styles.hotdeals}>
  <Img className={styles.hotdealsimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/9f9d2095-f019-4bb5-b961-db87fab439f6.jpg"/>
</Box>

</Box>



<Text>SUPER SAVERS</Text>
<Box className={styles.gift} >
<Gifting/>
</Box>






<Text>REFER YOUR FRIENDS</Text>
<Box className={styles.ref}>
  <Img className={styles.refimg} src="https://d32baadbbpueqt.cloudfront.net/Homepage/8bfe8bb4-002d-4097-a773-6af33325a594.jpg"/>
</Box>



<Box>
  <Newly/>
</Box>
    </>
  )
}

export default Home