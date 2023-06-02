import React from "react";
import { Button, Text, View, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { Book } from "../../slicer/books/books.types";
import { i18n } from "../../translations/i18n";
import MenuBook from "../../components/MenuBook";


interface Props {
  book?: Book;
}

const BookC = ({ book }: Props) => {
  const navigation = useNavigation();
  const lang = useSelector<State, string>((state) => state.general.lang);

  if (!book) return <></>

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",

      }}>
      <View>
        <MenuBook book={book} />
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: book.coverPage.toString() }}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{book?.title}</Text>
              <Text style={styles.text}>€{book?.price}</Text>
            </View>
          </View>
          <Text style={{ marginTop: 30, fontWeight: "bold" }}>
            {i18n.t("modules.book.description")}
          </Text>
          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            {lang === "PT" ? book?.resume : book?.resumeEN}
          </Text>
          <Text style={{ marginTop: 30, fontWeight: "bold" }}>
            {i18n.t("modules.book.author")}
          </Text>
          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            {lang === "PT" ? book?.authorResume : book?.authorResumeEN}
          </Text>
          <Text style={{ marginTop: 30, fontWeight: "bold" }}>
            {i18n.t("modules.book.designer")}
          </Text>
          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            {lang === "PT" ? book?.designerResume : book?.designerResumeEN}
          </Text>
          <Text style={{ marginTop: 30, fontWeight: "bold" }}>
            {i18n.t("modules.book.translator")}
          </Text>
          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            {lang === "PT" ? book?.translatorResume : book?.translatorResumeEN}
          </Text>
          <Button title='Go back' onPress={() => navigation.goBack()} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
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
    flex: 1,
    overflow: "hidden",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    overflow: "hidden",
  },
});

export default BookC;
