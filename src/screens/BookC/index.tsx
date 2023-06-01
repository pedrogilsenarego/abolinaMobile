import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { i18n } from "../../translations/i18n";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { Book } from "../../slicer/books/books.types";

interface Props {
  book?: Book;
}

const BookC = ({ book }: Props) => {
  const navigation = useNavigation();
  const lang = useSelector<State, string>((state) => state.general.lang);

  // if (!book) return <></>

  return (


    //   <View style={styles.container}>
    //     <View style={styles.imageContainer}>
    //       <Image
    //         style={styles.image}
    //         source={{ uri: book.coverPage.toString() }}
    //       />
    //     </View>
    //     <View style={styles.detailsContainer}>
    //       <Text style={styles.title}>{book?.title}</Text>
    //       <Text style={styles.text}>€{book?.price}</Text>
    //     </View>
    //   </View>


    //   <Text style={{ marginTop: "30px", fontWeight: "bold" }}>
    //     {i18n.t("modules.book.description")}
    //   </Text>
    //   <Text style={{ marginTop: "10px", textAlign: "justify" }}>
    //     {lang === "PT" ? book?.resume : book?.resumeEN}
    //   </Text>
    <View style={styles.mainContainer}>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1.1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 0.9,
    marginLeft: 10,

    height: "100%",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  text: {
    fontSize: 16,

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export default BookC;
