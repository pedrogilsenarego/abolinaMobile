import React, { useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete";
import LoginM from "./LoginM";
import Register from "./Register";
import RecoverPwd from "./RecoverPwd";

const Login = () => {
  const [state, setState] = useState<"login" | "register" | "recoverPassword">(
    "login"
  );

  let renderComponent;
  switch (state) {
    case "login":
      renderComponent = <LoginM />;
      break;
    case "register":
      renderComponent = <Register />;
      break;
    case "recoverPassword":
      renderComponent = <RecoverPwd />;
      break;
    default:
      renderComponent = null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexGrow: 1,
        backgroundColor: Colors.tealc,
        flexDirection: "column",
        rowGap: 20,
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 200, height: 200, marginTop: 100 }}
        source={require("../../assets/images/initialLogo.jpg")}
      />
      {renderComponent}
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => setState(state === "login" ? "register" : "login")}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          {state === "login" ? "Register" : "Login"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => setState("recoverPassword")}
      >
        <Text style={{ color: "#ffffffab", fontSize: 16 }}>
          {i18n.t("modules.login.recoverPassword")}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
