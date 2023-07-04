import * as React from "react";
import BookC from "../../src/screens/BookC";
import MainLayout from "../layouts/MainLayout";
import BookReader from "./BookReader";
import ConvertCoupons from "./ConvertCoupons";
import HomeC from "./Home/Home";
import MainMenu from "./MainMenu";
import ShopC from "./Shop/Home";

export const HomeScreen = () => {
  return <HomeC />;
};

export const ShopScreen = () => {
  return <ShopC />;
};

export const MainMenuScreen = () => {
  return <MainMenu />;
};

export const ConvertCouponsScreen = () => {
  return <ConvertCoupons />;
};

export const BookScreen = ({ route }: any) => {
  const { book } = route.params;
  return <BookC book={book} />;
};

export const BookReaderScreen = () => {
  return <BookReader />;
};
