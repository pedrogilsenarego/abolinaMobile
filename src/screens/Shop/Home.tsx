import { useState, useEffect } from "react";

import { View, FlatList, SafeAreaView } from "react-native";


import Product from "./components/Product";
import { firestore } from "../../config/firebaseConfig";

import * as React from "react"
import { Book } from "../../slicer/books/books.types";

const Shop = () => {
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    firestore.collection("books").onSnapshot((query) => {
      const list: any[] = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setBooks(list);
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View>
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

export default Shop;
