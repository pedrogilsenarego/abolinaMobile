import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ROUTE_PATHS } from "../../../constants/routes";
import { Book } from "../../../slicer/books/books.types";

interface Props {
  product: Book;
  style?: object;
}

const Product = ({ product, style }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigation.navigate(ROUTE_PATHS.BOOK, { book: product })}
      style={[styles.container, style]}
    >
      <Image
        style={styles.image}
        source={{ uri: product.coverPage.toString() }}
      />
      <Text>{product.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "31%",
    alignItems: "center",
    margin: `${7 / 6}%`,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 150,
  },
});

export default Product;
