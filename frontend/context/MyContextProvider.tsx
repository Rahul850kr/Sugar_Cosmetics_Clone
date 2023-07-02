"use client";
import { ReactNode, createContext, useState } from "react";
interface MyContextType {
  test: string;
  handleText: (data: string) => void;
}
type childrenType = {
  children: ReactNode;
};

export const AppContext = createContext<MyContextType>({
  test: "",
  handleText: () => {},
});

const MyContextProvider = ({ children }: childrenType) => {
  const [test, setText] = useState("");

  const handleText = (val: string) => {
    console.log("enters in the function");
    setText(val);
  };

  return (
    <AppContext.Provider value={{ test, handleText }}>
      {children}
    </AppContext.Provider>
  );
};

export default MyContextProvider;
