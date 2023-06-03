import React from "react";
import {
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "stretch"
      }}
    >
      <Text style={{ fontSize: 24, color: Colors.tealc, alignSelf: "center" }}>{i18n.t("modules.login.title")}</Text></SafeAreaView>
  )
}

export default Login