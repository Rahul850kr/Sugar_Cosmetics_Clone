"use client";
import { ReactNode, createContext, useState } from "react";
interface MyContextType {
  screenUi: any;
  handleGetHomeScreenUi: () => void;
  handleLogin: (payload: any) => void;
}
type childrenType = {
  children: ReactNode;
};

export const AppContext = createContext<MyContextType>({
  screenUi: {},
  handleGetHomeScreenUi: () => {},
  handleLogin: () => {},
});

const MyContextProvider = ({ children }: childrenType) => {
  const [screenUi, setScreenUi] = useState<Object>({});

  const handleGetHomeScreenUi = async () => {
    let res = await fetch("http://localhost:8080/screenUi");
    let fetchedData = await res.json();
    setScreenUi(fetchedData.homepageUi);
  };

  const handleLogin = async (payload: any) => {
    try {
      let res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = await res.json();
      if (data.token) {
        document.cookie = `token=${data.token}; max-age=3600; path=/;`;
      }
      console.log(data);
    } catch (err) {
      
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{ screenUi, handleGetHomeScreenUi, handleLogin }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MyContextProvider;
