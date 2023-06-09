import React from 'react'
import styles from "./Navbar.module.scss";
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const inputFieldStyles = {
        color: 'white', // Text color
        '& .MuiInputBase-input': {
            '&.Mui-focused': {
              borderColor: 'green', // Change focus border color here
            },
          },
      };
  return (
    <nav className={styles.navbarContainer} >
      <img src="https://cdn.sanity.io/images/gxmub2ol/production/98a9ebae1456c75c727d5fab8c934dae908a144c-1493x380.png" alt="" className={styles.logo} />
          <Box className={styles.searchBox}>
            <TextField
                className={styles.inputField}
                placeholder="Try 'Liquid Lipstick'"
               
            />
            <Box className={styles.searchTextBox} >
                <SearchIcon/>
                Search
            </Box>
          </Box>
    
    </nav>
  )
}

export default Navbar
