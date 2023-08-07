"use client";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./signup.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AppContext } from "@/context/MyContextProvider";
import { useRouter } from "next/navigation";

const Signup = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const contextProvider = useContext(AppContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState<any>({
    status: "",
    text: "",
  });
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [crossFlags, setCrossFlags] = useState<any>({
    nameCross: false,
    emailCross: false,
    passwordCross: false,
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setLoader(true);
    let payload = {
      name,
      email,
      password,
    };

    let res = await contextProvider.handleSignup(payload);

    // console.log(res);
    if (res.status) {
      setSnackBarContent({
        status: "success",
        text: "Signup Succesfull",
      });
      setSnackbarOpen(true);
      await new Promise((resolve) => {
        setTimeout(() => {
          setSnackbarOpen(false);
          resolve("");
        }, 2000);
      });

      router.push("/login");
    } else {
      if (res.msg == "USER ALREADY REGISTERED") {
        setSnackBarContent({
          status: "warning",
          text: "User is already registered. Please Login!",
        });
        setSnackbarOpen(true);
        await new Promise((resolve) => {
          setTimeout(() => {
            setSnackbarOpen(false);
            resolve("");
          }, 4000);
        });
        router.push("/login");
      } else {
        setSnackBarContent({
          status: "error",
          text: "SSomething Went Wrong Please Try Again!",
        });
        setSnackbarOpen(true);
        await new Promise((resolve) => {
          setTimeout(() => {
            setSnackbarOpen(false);
            resolve("");
          }, 4000);
        });
        // router.push("/login");
      }
    }

    setLoader(false);
  };

  const handleCloseSnackBar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.leftSection}></Box>
      <Box className={styles.rightSection}>
        <Box className={styles.backArrowBox}>
          <KeyboardBackspaceIcon className={styles.backArrow} />
        </Box>
        <Box className={styles.hiImageBox}>
          <img src="https://media.sugarcosmetics.com/upload/Hi!.png" alt="Hi" />
        </Box>
        <Box className={styles.loginSignUpText}>Register Here</Box>
        <Box className={styles.inputFieldBox}>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value == "" || e.target.value == undefined) {
                // setEmailCrossFlag(false);
                setCrossFlags({ ...crossFlags, nameCross: false });
              } else {
                setCrossFlags({ ...crossFlags, nameCross: true });
              }
            }}
            type="text"
            value={name}
            label="Full Name"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "50ch" }}
            InputProps={{
              endAdornment: (
                <>
                  {crossFlags.nameCross && (
                    <Box
                      className={styles.inputSuffix}
                      onClick={() => {
                        setEmail("");
                        setCrossFlags({ ...crossFlags, nameCross: false });
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
              setEmail(e.target.value);
              if (e.target.value == "" || e.target.value == undefined) {
              
                setCrossFlags({ ...crossFlags, emailCross: false });
              } else {
                setCrossFlags({ ...crossFlags, emailCross: true });
              }
            }}
            type="email"
            value={email}
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "50ch" }}
            InputProps={{
              endAdornment: (
                <>
                  {crossFlags.emailCross && (
                    <Box
                      className={styles.inputSuffix}
                      onClick={() => {
                        setEmail("");
                        setCrossFlags({ ...crossFlags, emailCross: false });
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
                setCrossFlags({ ...crossFlags, passwordCross: false });
              } else {
                setCrossFlags({ ...crossFlags, passwordCross: true });
              }
            }}
            type={passwordVisible ? "text" : "password"}
            label="Password"
            value={password}
            id="outlined-start-adornment"
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

                    {crossFlags.passwordCross && (
                      <Box className={styles.inputSuffix}>
                        <CloseIcon
                          fontSize="small"
                          onClick={() => {
                            setPassword("");
                            setCrossFlags({
                              ...crossFlags,
                              passwordCross: false,
                            });
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

        <Box className={styles.sendOtpButtonBox}>
          {loader ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button
              onClick={handleSubmit}
              className={styles.sendOtpButton}
              variant="contained"
            >
              Register
            </Button>
          )}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          variant="filled"
          severity={snackBarContent.status}
          sx={{ width: "100%" }}
        >
          {snackBarContent.text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Signup;
