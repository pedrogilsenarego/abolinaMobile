import { useState, useEffect } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import Product from "./components/Product";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import { signOut } from "../../services/user";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { CurrentUser } from "../../slicer/user/user.types";
import React from "react";
import { Book } from "../../slicer/books/books.types";
import { fetchBooksOwned } from "../../services/books";
import { useQuery } from 'react-query';

const Home = () => {
  const currentUser = useSelector<State, CurrentUser>((state) => state?.user?.currentUser);
  const listBooksOwned = currentUser?.booksOwned || [];

  const { data: books, isLoading: loadingBooks, error: errorBooks, refetch } = useQuery<Book[]>('booksOwned', () =>
    fetchBooksOwned(listBooksOwned),
    {
      staleTime: 60 * 60 * 24 * 1000,
      cacheTime: 60 * 60 * 24 * 1000,
    }
  );

  useEffect(() => {
    refetch(); // Trigger a refetch when the listBooksOwned value changes
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
            data={books || []}
            renderItem={({ item }) => <Product product={item} />}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
