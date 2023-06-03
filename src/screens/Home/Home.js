import { useState, useEffect } from "react";

import { View, FlatList, SafeAreaView } from "react-native";
import { Colors } from "../../constants/pallete";

import Product from "./components/Product";
import { firestore } from "../../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Menu from "../../components/Menu";

const Home = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    firestore.collection("books").onSnapshot((query) => {
      const list = [];
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
        <Menu></Menu>
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
