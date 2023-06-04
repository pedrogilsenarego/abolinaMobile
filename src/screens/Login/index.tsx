import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete"
import LoginM from "./LoginM"
import Register from "./Register";





const Login = () => {



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 20,
      }}
    >
      <Text style={{ fontSize: 24, color: Colors.tealc, alignSelf: "center" }}>
        {i18n.t("modules.login.title")}
      </Text>
      <LoginM />
    </SafeAreaView>
  );
};

export default Login;
