import { Box, Button, Input, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/signup.module.css";

const Signup = () => {
  return (
    <Box className={styles.mainDiv}>
      <Box className={styles.left}></Box>
      <Box className={styles.right}>
        <Box className={styles.backArrowDiv}>
          <Link to="/loginOrsignup">
            <i className="fa-solid fa-arrow-left" id={styles.backArrow}></i>
          </Link>
        </Box>
        <Box mt="2rem">
          <Text className={styles.formHead}>Please fill this form below</Text>
        </Box>
        <form className={styles.formBox}>
          <fieldset style={{border: "2px solid rgba(0,0,0,0.2)"}}>
            <legend>
              First Name<span>*</span>
            </legend>
            <Input
              fontWeight={"500"}
              fontSize={"1.2rem"}
              variant="unstyled"
              required
            />
          </fieldset>
          <fieldset style={{border: "2px solid rgba(0,0,0,0.2)"}}>
            <legend>
              Last Name<span>*</span>
            </legend>
            <Input
              fontWeight={"500"}
              fontSize={"1.2rem"}
              variant="unstyled"
              required
            />
          </fieldset>
          <fieldset style={{border: "2px solid rgba(0,0,0,0.2)"}}>
            <legend>
              Enter Email Id<span>*</span>
            </legend>
            <Input
              fontWeight={"500"}
              fontSize={"1.2rem"}
              variant="unstyled"
              required
            />
          </fieldset>
          <fieldset style={{border: "2px solid rgba(0,0,0,0.2)"}} className={styles.field}>
            <legend>
              Enter Password<span>*</span>
            </legend>
            <Input
              type={"password"}
              fontWeight={"500"}
              fontSize={"1.2rem"}
              variant="unstyled"
              required
            />
          </fieldset>
          <Button
            type="submit"
            p={" 1.5rem 2rem"}
            mt={"1rem"}
            bgColor={"black"}
            color="white"
            colorScheme={""}
          >
            SUBMIT
          </Button>
        </form>
        <Text className={styles.or}>OR</Text>
        <Box className={styles.googleBox}>
          <Image className={styles.googleImage} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
            <Text className={styles.googleText}>Continue with Gmail</Text>
        </Box>
        <Box className={styles.need}>
          <Box>
            Need Help?<span> Contact Us</span>
          </Box>
        </Box>
        <Box className={styles.sign}>
          <Box>
            By Signing up or logging in, you agree to our
            <span> Terms and Conditions</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
