import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Inputformobile = ({classname,handleNumChange}) => {


  return (
    <fieldset>
      <legend>Enter Mobile Number</legend>
      <InputGroup>
        <InputLeftAddon
          background={"none"}
          border="none"
          children="+91"
          pointerEvents="none"
          fontSize="1.2em"
        />
        <Input onChange={(e)=>handleNumChange(e.target.value)} variant="unstyled" type="number" className={classname} />
      </InputGroup>
    </fieldset>
  );
};

export default Inputformobile;
