"use client";
import { ReactNode, createContext, useState } from "react";
interface MyContextType {
  screenUi: any;
  handleGetHomeScreenUi: () => void;
  handleLogin: (payload: any) => void;
  userInfo: any;
  handleGetUserInfo: (payload: any) => void;
  isAuth: boolean;
  handleSetIsAuth: (payload: boolean) => void;
  handleLogOut: () => void;
}
type childrenType = {
  children: ReactNode;
};

export const AppContext = createContext<MyContextType>({
  screenUi: {},
  handleGetHomeScreenUi: () => {},
  handleLogin: () => {},
  userInfo: {},
  handleGetUserInfo: () => {},
  isAuth: false,
  handleSetIsAuth: () => {},
  handleLogOut: () => {},
});

const MyContextProvider = ({ children }: childrenType) => {
  const [screenUi, setScreenUi] = useState<Object>({});
  const [userInfo, setUserInfo] = useState<Object>({});
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const handleGetHomeScreenUi = async () => {
    let res = await fetch("http://localhost:8080/screenUi");
    let fetchedData = await res.json();
    setScreenUi(fetchedData.homepageUi);
  };

  const handleSetIsAuth = (val: boolean) => {
    setIsAuth(val);
  };

  const handleLogin = async (payload: any): Promise<object> => {
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
        console.log(data);
        document.cookie = `token=${data.token}; max-age=3600; path=/;`;
        setUserInfo(data.user);
        // return data;
      }

      return data;
      // console.log(data);
    } catch (err) {
      console.log(err);
      return { msg: "LOGIN FAILED IN CATCH" };
    }
  };

  const handleGetUserInfo = async (token: any) => {
    // const token = Cookies.get('token');
    try {
      let res = await fetch("http://localhost:8080/userInfo", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      let data = await res.json();
      console.log(data);
      setUserInfo(data.userInfo);
    } catch (err) {
      console.log("ERROR IN GETTING USERINFO");
    }
  };

  const handleLogOut = () => {
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setUserInfo({});
    setIsAuth(false);
  };

  return (
    <AppContext.Provider
      value={{
        screenUi,
        handleGetHomeScreenUi,
        handleLogin,
        userInfo,
        handleGetUserInfo,
        isAuth,
        handleSetIsAuth,
        handleLogOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MyContextProvider;
