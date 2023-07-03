import { View, FlatList, SafeAreaView, Text } from "react-native";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { CurrentUser } from "../../slicer/user/user.types";
import React from "react";
import { Book } from "../../slicer/books/books.types";
import { fetchBooksOwned } from "../../services/books";
import { useQuery } from "react-query";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete";
import useNavBottom from "../../hooks/useNavBottom";
import Shelves from "./components/Shelves";

const Home = () => {
  const currentUser = useSelector<State, CurrentUser>(
    (state) => state?.user?.currentUser
  );
  const listBooksOwned = currentUser?.booksOwned || [];
  useNavBottom({ show: true });
  const {
    data: books,
    isLoading: loadingBooks,
    error: errorBooks,
  } = useQuery<Book[]>("booksOwned", () => fetchBooksOwned(listBooksOwned), {
    enabled: listBooksOwned.length > 0,
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View>
        <View style={{ marginHorizontal: 10 }}>
          {listBooksOwned.length === 0 ? (
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                color: Colors.tealc,
                marginTop: 150,
              }}
            >
              {i18n.t("modules.home.noBooks")}
            </Text>
          ) : (
            <View >
              <Shelves />
              <FlatList
                numColumns={3}
                style={{ paddingTop: 10 }}
                keyExtractor={(item, index) => index.toString()}
                data={books || []}
                renderItem={({ item }) => <Product product={item} />}
              />
            </View>
          )}
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default Home;
