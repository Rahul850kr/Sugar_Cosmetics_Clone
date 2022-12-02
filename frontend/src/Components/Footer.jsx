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
         <Box className={styles.store}>
                <Text>Stores</Text>
                <Text>Terms & Conditions</Text>
                <Text>Returns</Text>
                <Text>FAQs</Text>
                <Text>About Us</Text>
         </Box>

          <Box className={styles.touch}>
             <Text>GET IN TOUCH</Text>
         </Box>
         <Box className={styles.call}>
          <Text>Call us at</Text>
          <Text>Support</Text>
          <Text>Careers</Text>
          <Text>Press & Media</Text>
          <Text>Influencer Collab</Text>
         </Box>

          <Box className={styles.join}>
            
            <Text>1800-209-9933</Text>
                  {/* Monday to Friday : 9 AM to 7 PM */}
            <Text>hello@sugarcosmetics.com</Text>
            <Text>We're hiring!</Text>
            <Text>pr@sugarcosmetics.com</Text>
            <Text>Join Us</Text>
           
          </Box>


          <Box className={styles.get}>
            <Box>
              <Text className={styles.the}>GET THE NEW SUGAR APP TODAY!</Text>
              <Text className={styles.tap} >Tap into a better shopping experience</Text>
            </Box>
            <Box>
              <Img className={styles.getimg} src="https://sugarcosmetics.com/playstore.png"/>
            </Box>
            <Box>
              <Img className={styles.getimg}  src="https://sugarcosmetics.com/apple-store.png"/>
            </Box>
          </Box>



         <Text className={styles.copy}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</Text>
    </Box>
    </>
  )
}

export default Footer