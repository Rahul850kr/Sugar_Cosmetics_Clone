import {
  Box,
  Button,
  Checkbox,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/logsign.module.css";
import { Link, useNavigate } from "react-router-dom";
import Inputformobile from "../Components/Inputformobile";
import Otpform from "../Components/Otpform"

const LogSign = () => {
  const [val,setVal] = useState(true);
  const [otpText,setOtpText] = useState("");
  const [num,setNum] = useState("");
  const navigate = useNavigate()
  // console.log(text)

  const handleChange = (data)=>{
      setOtpText(data);
  }

  const handleNumChange = (data)=>{
    setNum(data)
  }

  const handleSubmitNum = ()=>{
      setVal(false);
  }

  const handleSubmitOtp = ()=>{
console.log(num)
  }

  return (
    <Box className={styles.mainDiv}>
      <Box className={styles.left}></Box>
      <Box className={styles.right}>
        <Box className={styles.backArrowDiv}>
          <Link to="/">
            <i className="fa-solid fa-arrow-left" id={styles.backArrow}></i>
          </Link>
        </Box>
        <Box className={styles.hiDiv}>
          <Image
            className={styles.hi}
            src="https://media.sugarcosmetics.com/upload/Hi!.png"
          />
        </Box>
        <Text className={styles.head}>Login/Sign Up Using Phone</Text>
        <Box className={styles.fieldBox}>
        {val?<Inputformobile handleNumChange={handleNumChange} classname={styles.input} />:<Otpform handleChange={handleChange} classname={styles.input} />} 
        </Box>
        <Box className={styles.textBox}>
          <Text>
            Registering for this site allows you to access your order status and
            history. Just fill in the above fields, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.
          </Text>
        </Box>
        <Button onClick={val?handleSubmitNum:handleSubmitOtp} colorScheme={""} className={styles.button} mt="2rem" disabled={val?(num.length<10):(otpText.length<4)}>
          {val?"SEND ME OTP":"VALIDATE THIS"}
        </Button>
        <Box className={styles.checkDiv}>
          <Checkbox defaultChecked="true"></Checkbox>
          <Box>
            Get important updates on Whatsapp <span> Terms and Conditions</span>
          </Box>
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

export default LogSign;
