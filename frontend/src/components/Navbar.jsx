import { Box, Button, Flex, Heading, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/navbar.module.css"
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
    <Menu isLazy>
            <MenuButton>Makeup</MenuButton>
            <MenuList>
    
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>

  </Menu>

            
            <Text>Brushes</Text>
            <Text>Skincare</Text>
            <Text>Gifting</Text>
            <Text>Blog</Text>
            <Text>Offers</Text>
            <Text>Stores</Text>
    </Box>


    {/* <Menu isLazy>
  <MenuButton>Open menu</MenuButton>
  <MenuList>
    
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
</Menu> */}










</Box>





</Box>
  )
}

export default Navbar