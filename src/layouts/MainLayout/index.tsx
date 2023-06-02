import { SafeAreaView, View } from "react-native"
import MenuBar from "../../components/MenuBar"
import React from "react"

const MainLayout = (props: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View >
        <MenuBar />
        {props.children}
      </View>
    </SafeAreaView>
  )
}
export default MainLayout