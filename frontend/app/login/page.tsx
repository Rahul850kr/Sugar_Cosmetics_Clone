"use client";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styles from "./login.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AppContext } from "@/context/MyContextProvider";

const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [emailCrossFlag, setEmailCrossFlag] = useState<Boolean>(false);
  const [passwordCrossFlag, setPasswordCrossFlag] = useState<Boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { handleLogin } = useContext(AppContext);

  const handleSubmit = () => {
    console.log(email, password);
    handleLogin({ email: email, password: password });
  };

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
            Login
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
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value == "" || e.target.value == undefined) {
                  setEmailCrossFlag(false);
                } else {
                  setEmailCrossFlag(true);
                }
              }}
              type="email"
              label="Email"
              value={email}
              sx={{ m: 1, width: "50ch" }}
              InputProps={{
                endAdornment: (
                  <>
                    {emailCrossFlag && (
                      <Box
                        className={styles.inputSuffix}
                        onClick={() => {
                          setEmail("");
                          setEmailCrossFlag(false);
                        }}
                      >
                        <CloseIcon fontSize="small" />
                      </Box>
                    )}
                  </>
                ),
              }}
            />
          </Box>
          <Box className={styles.inputFieldBox}>
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value == "" || e.target.value == undefined) {
                  setPasswordCrossFlag(false);
                } else {
                  setPasswordCrossFlag(true);
                }
              }}
              type={passwordVisible ? "text" : "password"}
              label="Password"
              value={password}
              sx={{ m: 1, width: "50ch" }}
              InputProps={{
                endAdornment: (
                  <>
                    <Box className={styles.inputSuffixBox}>
                      {!passwordVisible ? (
                        <VisibilityIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            setPasswordVisible(true);
                          }}
                        />
                      ) : (
                        <VisibilityOffIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            setPasswordVisible(false);
                          }}
                        />
                      )}

                      {passwordCrossFlag && (
                        <Box className={styles.inputSuffix}>
                          <CloseIcon
                            fontSize="small"
                            onClick={() => {
                              setPassword("");
                              setPasswordCrossFlag(false);
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  </>
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
              onClick={handleSubmit}
              className={styles.sendOtpButton}
              variant="contained"
            >
              Login
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
