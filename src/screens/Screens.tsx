import React from "react"
import MainLayout from "../layouts/MainLayout"
import Home from "./Home/Home"
import BookC from "../../src/screens/BookC";
import MainMenu from "./MainMenu";
import ConvertCoupons from "./ConvertCoupons";
import BookReader from "./BookReader";


export const HomeScreen = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
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