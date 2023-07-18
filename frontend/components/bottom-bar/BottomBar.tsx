"use client";
import { useEffect, useState } from "react";
import styles from "./bottombar.module.scss";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";

const BottomBar = ({ handleNavigateBottomBar }: any) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);
  }, []);
  return (
    <Paper
      className={styles.bottomBar}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, color: "red" }}
      elevation={3}
    >
      <BottomNavigation
        className={styles.bottomBarBox}
        sx={{ backgroundColor: "black" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log("dskjcdsk", newValue);
          setValue(newValue);
          handleNavigateBottomBar(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            "&.MuiBottomNavigationAction-root": { color: "white" },
            "&.MuiBottomNavigationAction-root.Mui-selected:focus": {
              color: "#fc2779",
            },
          }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          sx={{
            "&.MuiBottomNavigationAction-root": { color: "white" },
            "&.MuiBottomNavigationAction-root.Mui-selected:focus": {
              color: "#fc2779",
            },
          }}
          label="Categories"
          icon={<GridViewIcon />}
        />
        <BottomNavigationAction
          sx={{
            "&.MuiBottomNavigationAction-root": { color: "white" },
            "&.MuiBottomNavigationAction-root.Mui-selected:focus": {
              color: "#fc2779",
            },
          }}
          label="Account"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;
