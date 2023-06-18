import { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { storage } from "../../config/firebaseConfig";
import { WebView } from 'react-native-webview';
import * as React from "react";
import Book1 from "../../books/book1";

const BookReader = () => {


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 60,
      }}
    >
      <Book1 />
    </SafeAreaView>
  );
};

export default BookReader;
