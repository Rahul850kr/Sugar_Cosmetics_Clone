import { Box, Button, Heading, Image, Input,  List,  Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/navbar.module.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Box className={styles.navbar}>
    <Box className={styles.free}>
       <Text>FREE Mini Lipistic Set on a spend of Rs.999</Text>
       {/* <i class="fa-solid fa-xmark"></i> */}
    </Box>

<Box className={styles.sugar}>


    <Image className={styles.sugarlogo} src="https://cdn.sanity.io/images/gxmub2ol/production/98a9ebae1456c75c727d5fab8c934dae908a144c-1493x380.png"/>
    <Box className={styles.sugarbox}>
        <Input className={styles.sugarinput} placeholder='Try "Liquid Lipistics"'/>
        <Button>
        <i class="fa-solid fa-magnifying-glass"></i>
        Search
        </Button>
    </Box>   


    <Box className={styles.login}>

     <Box className={styles.logicon}><i class="fa-solid fa-user"></i></Box>
     <Text className={styles.register}>Login/Register</Text>

    </Box>



    <Box className={styles.bag}>

    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-bag-shopping"></i>
    <Box className={styles.per}>
    <i class="fa-solid fa-percent"></i>
    </Box>


    </Box>
     
</Box>


<Box className={styles.menu}>

    <Box className={styles.menulist}>
    



            <Menu className={styles.menuitem}>
               <MenuButton as={Button}>
               Makeup
               </MenuButton>
               <MenuList>
                <Text>Lips</Text>
                <MenuItem>Lipsitics</MenuItem>
                <MenuItem>Lip Care</MenuItem>
                <MenuItem>Liquid Lip Colours</MenuItem>
                <MenuItem>Value Sets</MenuItem>
                <MenuItem>Gifting</MenuItem>
               
              </MenuList>
             
            </Menu>





           
            <Menu className={styles.menuitem}>
               <MenuButton as={Button}>
               Brushes
               </MenuButton>
               <MenuList>
                <Text>FACE BRUSHES</Text>
                <MenuItem>Blend Trend Face Brush-001 Blush</MenuItem>
                <MenuItem>Blend Trend Face Brush-003 Contour</MenuItem>
                <MenuItem>Blend Trend Face Brush-006 Highlighter</MenuItem>
                <MenuItem>Blend Trend Face Brush-007 Powder</MenuItem>
                <MenuItem>Blend Trend Face Brush-052 Kabuki</MenuItem>
                <MenuItem>Blend Trend Face Brush-075 Powder</MenuItem>
               
              </MenuList>
             
            </Menu>
           
            <Menu className={styles.menuitem}>
               <MenuButton as={Button}>
               Skincare
               </MenuButton>
               <MenuList>
                
                <MenuItem>MOISTOURIZERS</MenuItem>
                <MenuItem>SUNSCRREN</MenuItem>
                <MenuItem>SETTING MISTA</MenuItem>
                <MenuItem>SHEET MASK COMBO</MenuItem>
                <MenuItem>MASKS</MenuItem>
                <MenuItem>COFFEE CULTURE RANGE</MenuItem>
              </MenuList>
             
            </Menu>
          
            <Menu className={styles.menuitem}>
               <MenuButton as={Button}>
               Gifting
               </MenuButton>
               <MenuList>
                
                <MenuItem>SUGAR MERCH STATION</MenuItem>
                <MenuItem>MAKEUP KITS</MenuItem>
                <MenuItem>VALUE SETS</MenuItem>
                <MenuItem>SUGAR SETS</MenuItem>
                <MenuItem>BESTSELLERS</MenuItem>
                <MenuItem>E-GIFT CARDS</MenuItem>
              </MenuList>
             
            </Menu>
            
            <Menu className={styles.menuitem}>
               <MenuButton as={Button}>
               Blog
               </MenuButton>
               <MenuList>
                <Text>Lips</Text>
                <MenuItem>Lipsitics</MenuItem>
                <MenuItem>Lip Care</MenuItem>
                <MenuItem>Liquid Lip Colours</MenuItem>
                <MenuItem>Value Sets</MenuItem>
                <MenuItem>Gifting</MenuItem>
               
              </MenuList>
             
            </Menu>
           
            <Text>Blog</Text>
            <Text>Offers</Text>
            <Text>Stores</Text>
    </Box>


  










</Box>





</Box>
  )
}

export default Navbar