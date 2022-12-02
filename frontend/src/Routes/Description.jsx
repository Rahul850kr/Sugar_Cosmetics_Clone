import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/description.module.css"
const Description = () => {
  return (
    <Box className={styles.home}>
         <Box className={styles.homei}>
            <Text>Home
                <span><i class="fa-solid fa-chevron-right"></i></span>
            </Text>
            <Text>Skincare Products
                <span><i class="fa-solid fa-chevron-right"></i></span>
            </Text>
            <Text>Coffee cultrue range
                <span><i class="fa-solid fa-chevron-right"></i></span>
            </Text>
         </Box>
    </Box>
  )
}

export default Description