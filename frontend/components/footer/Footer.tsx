import React from "react";
import styles from "./Footer.module.scss";
import { Box } from "@mui/material";
import HeadingOfEachSection from "../HeadingOfEachSection/HeadingOfEachSection";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TitleIcon from "@mui/icons-material/Title";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.upperBox}>
        <HeadingOfEachSection
          headingName="LET’S STAY IN TOUCH"
          color="black"
          fontSize="25px"
        />
        <p>
          Get the latest beauty tips straight to your inbox. Can’t wait to
          connect!
        </p>
        <Box className={styles.searchBox}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Try 'Liquid Lipstick'"
          />
          <Box className={styles.searchTextBox}>
            <SearchIcon />
            Search
          </Box>
        </Box>
        <Box className={styles.logoBox}>
          <img
            src="https://in.sugarcosmetics.com/Footer_sugar_icon.svg"
            alt=""
          />
        </Box>
      </Box>
      <Box className={styles.lowerBox}>
        <Box className={styles.socialMediaBox}>
          <Box className={styles.eachIconBox}>
            <FacebookIcon />
          </Box>
          <Box className={styles.eachIconBox}>
            <TitleIcon />
          </Box>
          <Box className={styles.eachIconBox}>
            <YouTubeIcon />
          </Box>
          <Box className={styles.eachIconBox}>
            <TwitterIcon />
          </Box>
          <Box className={styles.eachIconBox}>
            <InstagramIcon />
          </Box>
          <Box className={styles.eachIconBox}>
            <MailIcon />
          </Box>
          <Box className={styles.eachIconBox}>
            <PinterestIcon />
          </Box>
        </Box>
        <Box className={styles.termsConditionBox}>
          <p>Stores</p>
          <p>Terms & Conditions</p>
          <p>Returns</p>
          <p>FAQs</p>
          <p>About Us</p>
        </Box>
        <Box className={styles.bigMiddleBox}>
          <p className={styles.touchText}>GET IN TOUCH</p>
          <Box className={styles.contactsInfoBox}>
            <Box className={styles.eachContactBox}>
              <p className={styles.heading}>Call us at</p>
              <Box className={styles.headingDetails}>
                <p>1800-209-9933</p>
                <p>Monday to Friday : 9 AM to 7 PM</p>
              </Box>
            </Box>
            <Box className={styles.eachContactBox}>
              <p className={styles.heading}>Support</p>
              <p className={styles.headingDetails}>hello@sugarcosmetics.com</p>
            </Box>
            <Box className={styles.eachContactBox}>
              <p className={styles.heading}>Careers</p>
              <p className={styles.headingDetails}>We're hiring!</p>
            </Box>
            <Box className={styles.eachContactBox}>
              <p className={styles.heading}>Press & Media</p>
              <p className={styles.headingDetails}>pr@sugarcosmetics.com</p>
            </Box>
            <Box className={styles.eachContactBox}>
              <p className={styles.heading}>Influencer Collab</p>
              <p className={styles.headingDetails}>Join Us</p>
            </Box>
          </Box>
        </Box>
        <Box className={styles.playStoreBox}>
          <Box>
            <p className={styles.playStoreContentHeading} >GET THE NEW SUGAR APP TODAY!</p>
            <p className={styles.playStoreContentDetails} >Tap into a better shopping experience.</p>
          </Box>
          <Box className={styles.imageBox}>
            <img src="https://in.sugarcosmetics.com/playstore.png" alt="" />
          </Box>
          <Box className={styles.imageBox}>
            <img src="https://in.sugarcosmetics.com/apple-store.png" alt="" />
          </Box>
        </Box>
        <Box className={styles.copyrightBox} >
          <p>Copyright © 2023 SUGAR Cosmetics. All rights reserved.</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
