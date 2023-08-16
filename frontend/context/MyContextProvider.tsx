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
  wishlists: any;
  handleSetWishlists: (payload: any) => any;
  handleGetWishlists: (payload: any) => any;
  cartData: any;
  setCartData: (data: any) => any;
  snackbarOpen: any;
  setSnackbarOpen: (payload: any) => any;
  snackBarContent: any;
  setSnackBarContent: (payload: any) => any;
  handleCloseSnackBar: (payload: any) => any;
  handleRemoveWishlist: (id: any, token: any) => any;
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
  wishlists: [],
  handleSetWishlists: () => {},
  handleGetWishlists: () => {},
  cartData: [],
  setCartData: () => {},
  snackbarOpen: false,
  setSnackbarOpen: () => {},
  snackBarContent: {},
  setSnackBarContent: () => {},
  handleCloseSnackBar: () => {},
  handleRemoveWishlist: () => {},
});

const MyContextProvider = ({ children }: childrenType) => {
  const [screenUi, setScreenUi] = useState<Object>({});
  const [userInfo, setUserInfo] = useState<Object>({});
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [wishlists, setWishlists] = useState<any>([]);
  const [cartData, setCartData] = useState<any>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState<any>({
    status: "success",
    text: "",
  });

  const handleCloseSnackBar = () => {
    setSnackbarOpen(false);
  };

  const handleGetHomeScreenUi = async () => {
    let res = await fetch("http://localhost:8080/screenUi");
    let fetchedData = await res.json();
    setScreenUi(fetchedData.homepageUi);
  };

  const handleSetIsAuth = (val: boolean) => {
    setIsAuth(val);
  };

  const handleSetWishlists = (val: any) => {
    setWishlists(val);
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
        document.cookie = `token=${data.token}; max-age=86400; path=/;`;
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
      // console.log(res.status);
      if (res.status == 400) {
        if (data.msg == "NOT AUTHORISED PLEASE LOGIN") {
          setSnackBarContent({
            status: "error",
            text: "You are not authorized please login first!",
          });
          setSnackbarOpen(true);
          return "NOT AUTHORISED PLEASE LOGIN";
        } else if (data.msg == "Item Already In The Wishlist") {
          setSnackBarContent({
            status: "success",
            text: "Item removed from wishlist",
          });
          setSnackbarOpen(true);
          return "Item Already In The Wishlist";
        } else if (data.msg == "Something went wrong") {
          setSnackBarContent({
            status: "error",
            text: "Something Went Wrong!",
          });
          setSnackbarOpen(true);
          return "Something went wrong";
        }
      } else {
        setSnackBarContent({
          status: "success",
          text: "Item added to wishlist",
        });
        setSnackbarOpen(true);
        return "success";
      }
    } catch (err) {
      console.log("FAILED TO ADD TO WISHLIST");
      return "FAILED TO ADD TO WISHLIST";
    }
  };

  const handleRemoveWishlist = async (id: any, token: any) => {
    try {
      let res = await fetch(`http://localhost:8080/removeWishlist/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await res.json();
      console.log("data is ", data);
    } catch (err) {
      console.log("FAILED TO REMOVE ITEM FROM WISHLIST");
    }
  };

  const handleGetWishlists = async (token: any) => {
    try {
      let res = await fetch("http://localhost:8080/getWishlists", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
      let data = await res.json();
      if (res.status == 400) {
        if (data.msg == "NOT AUTHORISED PLEASE LOGIN") {
          return "NOT AUTHORISED PLEASE LOGIN";
        } else if (data.msg == "Something went wrong") {
          return "Something went wrong";
        }
      } else {
        handleSetWishlists(data.wishlists);
        return "success";
      }
    } catch (err) {
      console.log("FAILED TO ADD TO WISHLIST");
      return "FAILED TO ADD TO WISHLIST";
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
        wishlists,
        handleSetWishlists,
        handleGetWishlists,
        cartData,
        setCartData,
        snackbarOpen,
        setSnackbarOpen,
        snackBarContent,
        setSnackBarContent,
        handleCloseSnackBar,
        handleRemoveWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MyContextProvider;
