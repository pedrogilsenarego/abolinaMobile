import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete";
import Button from "../../components/Button";

import { Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../components/Inputs/TextField";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart, signUpUserStart } from "../../slicer/user/user.actions";
import { createAccount } from "../../services/user";


interface FORM {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch()
  const handleGoogleSigniIn = () => {
    dispatch(googleSignInStart());
  };

  const INITIAL_STATE: FORM = {
    email: "",
    password: "",
  };
  const handleSubmit = (values: FORM) => {
    createAccount(values)
  };

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
      <TouchableOpacity
        onPress={handleGoogleSigniIn}
        style={{
          backgroundColor: "red",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10
        }}
      >

        <Text
          style={{
            color: "white"
          }}
        >
          {i18n.t("modules.login.google")}
        </Text>
      </TouchableOpacity>
      <Formik
        initialValues={{ ...INITIAL_STATE }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={FORM_VALIDATION}
      >
        {(props) => (
          <View style={{ flex: 1, rowGap: 20 }}>
            <TextField name="email" label={i18n.t("modules.login.email")} />
            <TextField name="password" label={i18n.t("modules.login.password")} password />
            <Button label='Login' formik />

          </View>
        )}




      </Formik>
    </SafeAreaView>
  );
};

export default Login;
