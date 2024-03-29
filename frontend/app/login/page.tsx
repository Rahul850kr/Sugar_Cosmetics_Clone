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
import styles from "./login.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AppContext } from "@/context/MyContextProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [email, setEmail] = useState<String>("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState<any>({
    status: "",
    text: "",
  });
  const [password, setPassword] = useState<String>("");
  const [emailCrossFlag, setEmailCrossFlag] = useState<Boolean>(false);
  const [passwordCrossFlag, setPasswordCrossFlag] = useState<Boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const contextProvider = useContext(AppContext);
  const [loader, setLoader] = useState(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoader(true);
    let res = await contextProvider.handleLogin({
      email: email,
      password: password,
    });

    if (typeof res == "object") {
      if (!res["status"]) {
        if (res["msg"] == "USER NOT REGISTERED") {
          setSnackBarContent({
            status: "error",
            text: "You Are Not Registered Please Register First!",
          });
          setSnackbarOpen(true);
          await new Promise((resolve) => {
            setTimeout(() => {
              setSnackbarOpen(false);
              resolve("");
            }, 5000);
          });
          contextProvider.handleSetIsAuth(false);
          router.push("/signup");
        } else if (res["msg"] == "INCORRECT CREDENTIALS") {
          setSnackBarContent({
            status: "error",
            text: "Invalid Credentials Please try Again!",
          });
          setSnackbarOpen(true);
          setTimeout(() => {
            setSnackbarOpen(false);
          }, 3000);
          contextProvider.handleSetIsAuth(false);
        } else {
          setSnackBarContent({
            status: "error",
            text: "Something Went Wrong Please Try Again Later!",
          });
          setSnackbarOpen(true);
          setTimeout(() => {
            setSnackbarOpen(false);
          }, 3000);
          contextProvider.handleSetIsAuth(false);
        }
      } else {
        setSnackBarContent({
          status: "success",
          text: "Login Succesfull",
        });
        setSnackbarOpen(true);
        await new Promise((resolve) => {
          setTimeout(() => {
            setSnackbarOpen(false);
            resolve("");
          }, 2000);
        });
        contextProvider.handleSetIsAuth(true);
        let res = await contextProvider.handleGetWishlists(
          Cookies.get("token")
        );
        // console.log(res);
        router.push("/");
      }
    }
    setLoader(false);
  };

  const handleCloseSnackBar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box className={styles.mainContainer}>
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
      <Box className={styles.mobileViewCard}>
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
            value={email}
            fullWidth
            type="email"
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1 }}
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
            fullWidth
            type={passwordVisible ? "text" : "password"}
            label="Password"
            value={password}
            id="outlined-start-adornment"
            sx={{ m: 1 }}
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
        <Box className={styles.sendOtpButtonBox}>
          {loader ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button
              onClick={handleSubmit}
              className={styles.sendOtpButton}
              variant="contained"
              style={buttonDisable ? { opacity: 0.6 } : { opacity: 1 }}
            >
              Login
            </Button>
          )}
          <Box className={styles.orSectionBox}>
            <hr />
            <p>Or</p>
            <hr />
          </Box>
          <Link href="/signup">
            <Box className={styles.loginName}>Register</Box>
          </Link>
        </Box>
      </Box>
      <Box className={styles.leftSection}>
        <Box className={styles.backArrowBox}>
          <Link href="/">
            <KeyboardBackspaceIcon className={styles.backArrow} />
          </Link>
        </Box>
      </Box>
      <Box className={styles.rightSection}>
        <Box className={styles.rightSectionContent}>
          <Box className={styles.backArrowBox}>
            <Link href="/">
              <KeyboardBackspaceIcon className={styles.backArrow} />
            </Link>
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
            {loader ? (
              <CircularProgress color="secondary" />
            ) : (
              <Button
                onClick={handleSubmit}
                className={styles.sendOtpButton}
                variant="contained"
              >
                Login
              </Button>
            )}
            <Box className={styles.orSectionBox}>
              <hr />
              <p>Or</p>
              <hr />
            </Box>
            <Link href="/signup">
              <Box className={styles.loginName}>Register</Box>
            </Link>
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
