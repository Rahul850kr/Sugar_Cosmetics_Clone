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
  handleSignup: (payload: any) => any;
  handleAddWishlist: (payload: any, token: any) => any;
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
  handleSignup: () => {},
  handleAddWishlist: () => {},
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
        document.cookie = `token=${data.token}; max-age=3600; path=/;`;
        setUserInfo(data.user);
      }
      return data;
    } catch (err) {
      console.log(err);
      return { msg: "LOGIN FAILED IN CATCH" };
    }
  };

  const handleSignup = async (payload: any): Promise<any> => {
    try {
      let res = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log("ERROR IN SIGNUP");
      return { msg: "SIGNUP FAILED", status: false };
    }
  };

  const handleGetUserInfo = async (token: any) => {
    try {
      let res = await fetch("http://localhost:8080/userInfo", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      let data = await res.json();
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

  const handleAddWishlist = async (payload: any, token: any) => {
    try {
      let res = await fetch("http://localhost:8080/addWishlist", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();
      console.log(data);
    } catch (err) {
      console.log("FAILED TO ADD TO WISHLIST");
    }
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
        handleSignup,
        handleAddWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MyContextProvider;
