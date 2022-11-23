import { Input, InputGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import styles from "../styles/otpform.module.css"

const Otpform = ({classname,setVal,handleChange}) => {
    const [text,setText] = useState("");
   
  return (
    <fieldset>
    <legend>Enter OTP</legend>
    <InputGroup>
      <Input onChange={(e)=>{
        // setText(e.target.value);
        handleChange(e.target.value);
        }} variant="unstyled" type="number" className={`${classname} ${styles.otp}`} />
    </InputGroup>
  </fieldset>
  )
}

export default Otpform