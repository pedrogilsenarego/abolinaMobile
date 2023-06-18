import React from "react"
import { SafeAreaView, View, Text } from "react-native"
import Book1 from "../../books/book1"

const BookReader = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 60
      }}
    >
      <Book1 />
    </SafeAreaView>
  )
}

export default BookReader