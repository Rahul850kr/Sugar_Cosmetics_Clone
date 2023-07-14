"use client";
import { ReactNode, createContext, useState } from "react";
interface MyContextType {
  screenUi: any;
  handleGetHomeScreenUi: () => void;
}
type childrenType = {
  children: ReactNode;
};

export const AppContext = createContext<MyContextType>({
  screenUi: {},
  handleGetHomeScreenUi: () => {},
});

const MyContextProvider = ({ children }: childrenType) => {
  const [screenUi, setScreenUi] = useState<Object>({});

  const handleGetHomeScreenUi = async () => {
    let res = await fetch("http://localhost:8080/screenUi");
    let fetchedData = await res.json();
    setScreenUi(fetchedData.homepageUi);
  };

  return (
    <AppContext.Provider value={{ screenUi, handleGetHomeScreenUi }}>
      {children}
    </AppContext.Provider>
  );
};

export default MyContextProvider;
