import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete"
import LoginM from "./LoginM"
import Register from "./Register";
import Button from "../../components/Button";





const Login = () => {
  const [state, setState] = useState<"login" | "register">("login")



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.tealc,

        alignItems: "center",
        rowGap: 20,
      }}
    >
      <Text style={{ fontSize: 24, color: Colors.tealc, alignSelf: "center" }}>
        {i18n.t("modules.login.title")}
      </Text>
      <Button label={state === "login" ? "Register" : "Login"} onClick={() => setState(state === "login" ? "register" : "login")} />

      {state === "login" ? <LoginM /> : <Register />}
    </SafeAreaView>
  );
};

export default Login;
