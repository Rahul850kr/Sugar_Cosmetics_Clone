import { Box, Button, Heading, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/footer.module.css"
const Footer = () => {
  return (
    <>
    <Box className={styles.container}>
      
      <Text>READ MORE ABOUT SUGAR COSMETICS 
        <span><i class="fa-solid fa-chevron-right"></i></span>
      </Text>
      <Heading>LET’S STAY IN TOUCH</Heading>
      <Text>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</Text>
       <Box className={styles.inp}>
          <Input placeholder="Enter Email"/>
          <Button className={styles.inpbtn}>Subscribe</Button>
        </Box>
    </Box>


    <Box className={styles.sugarbox}>
         <Box className={styles.slog}>
         {/* <Img src="https://sugarcosmetics.com/Footer_sugar_icon.svg"/> */}
         </Box>


         <Box className={styles.logos}>
                 
            <Box className={styles.icon}>
                <i class="fa-brands fa-facebook iconi"></i>
            </Box>
            
            <Box className={styles.icon}>
                <i class="fa-brands fa-youtube"></i>
            </Box>
            <Box className={styles.icon}>
                <i class="fa-brands fa-twitter"></i>
            </Box>
            <Box className={styles.icon}>
                <i class="fa-brands fa-instagram"></i>
            </Box>
            <Box className={styles.icon}>
                <i class="fa-solid fa-envelope"></i>
            </Box>
            <Box className={styles.icon}>
                <i class="fa-brands fa-pinterest-p"></i>
            </Box>


         </Box>

        
    </Box>
    </>
  )
}

export default Footer