import { SafeAreaView, View } from "react-native"
import MenuBook from "../../components/MenuBook"
import React from "react"

const BookLayout = (props: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View >
        <MenuBook />
        {props.children}
      </View>
    </SafeAreaView>
  )
}
export default BookLayout