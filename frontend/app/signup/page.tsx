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
import Link from "next/link";

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
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

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

  const handleChange = (event: any, fieldType: String) => {
    if (fieldType == "name") {
      setName(event.target.value);
      if (event.target.value == "" || event.target.value == undefined) {
        setCrossFlags({ ...crossFlags, nameCross: false });
        setButtonDisable(true);
      } else {
        if (email == "" || password == "") {
          setButtonDisable(true);
        } else {
          setButtonDisable(false);
        }
        setCrossFlags({ ...crossFlags, nameCross: true });
      }
    } else if (fieldType == "email") {
      setEmail(event.target.value);
      if (event.target.value == "" || event.target.value == undefined) {
        setCrossFlags({ ...crossFlags, emailCross: false });
        setButtonDisable(true);
      } else {
        if (name == "" || password == "") {
          setButtonDisable(true);
        } else {
          setButtonDisable(false);
        }
        setCrossFlags({ ...crossFlags, emailCross: true });
      }
    } else if (fieldType == "password") {
      setPassword(event.target.value);
      if (event.target.value == "" || event.target.value == undefined) {
        setCrossFlags({ ...crossFlags, passwordCross: false });
        setButtonDisable(true);
      } else {
        if (email == "" || name == "") {
          setButtonDisable(true);
        } else {
          setButtonDisable(false);
        }
        setCrossFlags({ ...crossFlags, passwordCross: true });
      }
    }
  };

  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.mobileViewCard}>
        <Box className={styles.inputFieldBox}>
          <TextField
            onChange={(e) => handleChange(e, "name")}
            value={name}
            fullWidth
            type="text"
            label="Full Name"
            id="outlined-start-adornment"
            sx={{ m: 1 }}
            InputProps={{
              endAdornment: (
                <>
                  {crossFlags.nameCross && (
                    <Box
                      className={styles.inputSuffix}
                      onClick={() => {
                        setName("");
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
            onChange={(e) => handleChange(e, "email")}
            value={email}
            fullWidth
            type="email"
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1 }}
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
            onChange={(e) => handleChange(e, "password")}
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
        <Box className={styles.sendOtpButtonBox}>
          {loader ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button
              disabled={buttonDisable}
              onClick={handleSubmit}
              className={styles.sendOtpButton}
              variant="contained"
              style={buttonDisable ? { opacity: 0.6 } : { opacity: 1 }}
            >
              Register
            </Button>
          )}
          <Box className={styles.orSectionBox}>
            <hr />
            <p>Or</p>
            <hr />
          </Box>
          <Link href="/login">
            <Box className={styles.loginName}>Login</Box>
          </Link>
        </Box>
      </Box>
      <Box className={styles.leftSection}></Box>
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
          <Box className={styles.loginSignUpText}>Register Here</Box>
          <Box className={styles.inputFieldBox}>
            <TextField
              onChange={(e) => handleChange(e, "name")}
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
              onChange={(e) => handleChange(e, "email")}
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
              onChange={(e) => handleChange(e, "password")}
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
                disabled={buttonDisable}
                className={styles.sendOtpButton}
                variant="contained"
                style={buttonDisable ? { opacity: 0.6 } : { opacity: 1 }}
              >
                Register
              </Button>
            )}
            <Box className={styles.orSectionBox}>
              <hr />
              <p>Or</p>
              <hr />
            </Box>
            <Link href="/login">
              <Box className={styles.loginName}>Login</Box>
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
