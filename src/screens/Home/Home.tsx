import { useState, useEffect } from "react";

import { View, FlatList, SafeAreaView } from "react-native";
import { Colors } from "../../constants/pallete";

import Product from "./components/Product";
import { firestore } from "../../config/firebaseConfig";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import { signOut } from "../../services/user";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { CurrentUser } from "../../slicer/user/user.types";
import React from "react";
import { Book } from "../../slicer/books/books.types";
import firebase from "firebase/compat/app"; import { fetchBooksOwned } from "../../services/books";
;


const Home = () => {
  const [books, setBooks] = useState<Book[]>();
  const currentUser = useSelector<State, CurrentUser>((state) => state?.user?.currentUser);
  const listBooksOwned = currentUser?.booksOwned || [];

  useEffect(() => {
    fetchBooksOwned(listBooksOwned)
      .then((list) => {
        setBooks(list)
      })
      .catch((error) => {
        // Handle any errors that occurred during fetching
        console.error("Error fetching books:", error);
      });
  }, [listBooksOwned]);



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View>
        <Menu>
          <Button inverseColors label='Logout' onClick={signOut} />
        </Menu>
        <View style={{ marginHorizontal: 10 }}>
          <FlatList
            numColumns={3}
            style={{ paddingTop: 30 }}
            keyExtractor={(item, index) => index.toString()}
            data={books}
            renderItem={({ item }) => <Product product={item} />}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
