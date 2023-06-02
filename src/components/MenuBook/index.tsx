import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constants/pallete";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Book } from "../../slicer/books/books.types";

interface Props {
  book: Book
}

const MenuBook = ({ book }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-outline" size={17} color="white" />
        <Text style={styles.title}>{book?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tealc,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 4,
  },
  backButton: {
    padding: 5,
    borderWidth: 2,
    borderColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  title: {
    color: "white",
  },
});

export default MenuBook;
