import { useState, useEffect } from "react";

import { View, FlatList, SafeAreaView } from "react-native";
import { Colors } from "../../constants/pallete";

import Product from "./components/Product";
import { firestore } from "../../config/firebaseConfig";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import { signOut } from "../../services/user";

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
