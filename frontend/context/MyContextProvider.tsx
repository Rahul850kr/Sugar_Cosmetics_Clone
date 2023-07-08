"use client";
import { ReactNode, createContext, useState } from "react";
interface MyContextType {
  carouselImages: Object[];
  handleGetCarouselImages: () => void;
}
type childrenType = {
  children: ReactNode;
};

export const AppContext = createContext<MyContextType>({
  carouselImages: [],
  handleGetCarouselImages: () => {},
});

const MyContextProvider = ({ children }: childrenType) => {
  const [carouselImages, setCarouselImages] = useState<Object[]>([]);

  const handleGetCarouselImages = async () => {
    let res = await fetch("http://localhost:8080/carouselData");
    let fetchedData = await res.json();
    setCarouselImages(fetchedData.images);
  };

  return (
    <AppContext.Provider value={{ carouselImages, handleGetCarouselImages }}>
      {children}
    </AppContext.Provider>
  );
};

export default MyContextProvider;
