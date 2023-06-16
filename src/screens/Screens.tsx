import React from "react"
import MainLayout from "../layouts/MainLayout"
import Home from "./Home/Home"
import BookC from "../../src/screens/BookC";


export const HomeScreen = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}

export const BookScreen = ({ route }: any) => {
  const { book } = route.params;
  return (

    <BookC book={book} />

  );
};