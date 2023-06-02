import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/pallete";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Book } from "../../slicer/books/books.types";
interface Props {
  book?: Book
}

const MenuBook = ({ book }: Props) => {
  const navigation = useNavigation()
  return (
    <View style={{ backgroundColor: Colors.tealc, padding: 10 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 5, borderWidth: 2, borderColor: "transparent" }}

      >
        <Text style={{ color: "white" }}>{book?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBook;
