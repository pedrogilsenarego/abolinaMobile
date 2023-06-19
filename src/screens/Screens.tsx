
import MainLayout from "../layouts/MainLayout"
import Home from "./Home/Home"
import BookC from "../../src/screens/BookC";
import MainMenu from "./MainMenu";
import ConvertCoupons from "./ConvertCoupons";
import BookReader from "./BookReader";
import * as React from "react";
import Shop from "./Shop/Home";



export const HomeScreen = () => {
  return (

    <Home />

  )
}

export const ShopScreen = () => {
  return (
    <Shop />
  )
}

export const MainMenuScreen = () => {
  return (
    <MainMenu />
  )
}

export const ConvertCouponsScreen = () => {
  return (
    <ConvertCoupons />
  )
}

export const BookScreen = ({ route }: any) => {
  const { book } = route.params;
  return (

    <BookC book={book} />

  );
};

export const BookReaderScreen = () => {
  return (
    <BookReader />
  );
};