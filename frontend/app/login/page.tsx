"use client";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import styles from "./login.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AppContext } from "@/context/MyContextProvider";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.mobileViewCard}>
        <Box className={styles.inputFieldBox}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1 }}
            InputProps={{
              endAdornment: (
                <Box className={styles.inputSuffix}>
                  <CloseIcon fontSize="small" />
                </Box>
              ),
            }}
          />
        </Box>
        <Box className={styles.inputFieldBox}>
          <TextField
            fullWidth
            type="password"
            label="Password"
            id="outlined-start-adornment"
            sx={{ m: 1 }}
            InputProps={{
              endAdornment: (
                <Box className={styles.inputSuffixBox}>
                  <VisibilityIcon />
                  <VisibilityOffIcon />
                  <Box className={styles.inputSuffix}>
                    <CloseIcon fontSize="small" />
                  </Box>
                </Box>
              ),
            }}
          />
        </Box>
        <Box className={styles.sendOtpButtonBox}>
          <Button
            onClick={() => {}}
            className={styles.sendOtpButton}
            variant="contained"
          >
            SEND ME OTP
          </Button>
        </Box>
      </Box>
      <Box className={styles.leftSection}>
        <Box className={styles.backArrowBox}>
          <KeyboardBackspaceIcon className={styles.backArrow} />
        </Box>
      </Box>
      <Box className={styles.rightSection}>
        <Box className={styles.rightSectionContent}>
          <Box className={styles.backArrowBox}>
            <KeyboardBackspaceIcon className={styles.backArrow} />
          </Box>
          <Box className={styles.hiImageBox}>
            <img
              src="https://media.sugarcosmetics.com/upload/Hi!.png"
              alt="Hi"
            />
          </Box>
          <Box className={styles.loginSignUpText}>Login Here</Box>
          <Box className={styles.inputFieldBox}>
            <TextField
              type="email"
              label="Email"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              InputProps={{
                endAdornment: (
                  <Box className={styles.inputSuffix}>
                    <CloseIcon fontSize="small" />
                  </Box>
                ),
              }}
            />
          </Box>
          <Box className={styles.inputFieldBox}>
            <TextField
              type="password"
              label="Password"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              InputProps={{
                endAdornment: (
                  <Box className={styles.inputSuffixBox}>
                    <VisibilityIcon />
                    <VisibilityOffIcon />
                    <Box className={styles.inputSuffix}>
                      <CloseIcon fontSize="small" />
                    </Box>
                  </Box>
                ),
              }}
            />
          </Box>
          <Box className={styles.plainTextBox}>
            Registering for this site allows you to access your order status and
            history. Just fill in the above fields, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.
          </Box>
          <Box style={{ height: "5rem" }}></Box>
          <Box className={styles.sendOtpButtonBox}>
            <Button
              onClick={() => {}}
              className={styles.sendOtpButton}
              variant="contained"
            >
              SEND ME OTP
            </Button>
          </Box>
          <Box className={styles.whatsapptextBox}>
            <Checkbox
              {...label}
              defaultChecked
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
            <span className={styles.whatsappText}>
              Get important updates on Whatsapp{" "}
            </span>
            <span className={styles.termsCondition}>Terms and Conditions</span>
          </Box>
          <Box className={styles.needHelpBox}>
            Need Help?
            <span className={styles.termsCondition2}> Contact Us</span>
          </Box>
          <Box className={styles.lastTextBox}>
            By Signing up or logging in, you agree to our
            <span> Terms and Conditions</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
