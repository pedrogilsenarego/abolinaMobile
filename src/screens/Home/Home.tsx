import { useState, useEffect } from "react";
import { View, FlatList, SafeAreaView, Text } from "react-native";
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
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete";

const Home = () => {
  const currentUser = useSelector<State, CurrentUser>((state) => state?.user?.currentUser);
  const listBooksOwned = currentUser?.booksOwned || [];

  const { data: books, isLoading: loadingBooks, error: errorBooks } = useQuery<Book[]>('booksOwned', () =>
    fetchBooksOwned(listBooksOwned),
    {
      staleTime: 60 * 60 * 24 * 1000,
      cacheTime: 60 * 60 * 24 * 1000,
      enabled: listBooksOwned.length > 0,
    }
  );



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
          {listBooksOwned.length === 0 ? (
            <Text style={{ textAlign: "center", fontSize: 24, color: Colors.tealc, marginTop: 150 }}>{i18n.t("modules.home.noBooks")}</Text>
          ) : (
            <FlatList
              numColumns={3}
              style={{ paddingTop: 30 }}
              keyExtractor={(item, index) => index.toString()}
              data={books || []}
              renderItem={({ item }) => <Product product={item} />}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
