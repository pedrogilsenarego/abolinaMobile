import React from "react"
import { TouchableOpacity, View, Keyboard } from "react-native"
import { useDispatch } from "react-redux";

import Button from "../../../components/Button";

import { Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../../components/Inputs/TextField";

import { emailSignInStart, googleSignInStart, signUpUserStart } from "../../../slicer/user/user.actions";

import { i18n } from "../../../translations/i18n";

interface FORM {
  email: string;
  password: string;
}

const LoginM = () => {
  const dispatch = useDispatch()
  const handleGoogleSigniIn = () => {
    dispatch(googleSignInStart());
  };

  const INITIAL_STATE: FORM = {
    email: "",
    password: "",
  };
  const handleSubmit = (values: FORM) => {
    dispatch(emailSignInStart(values))
    Keyboard.dismiss();
  };
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
      <Formik
        initialValues={{ ...INITIAL_STATE }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={FORM_VALIDATION}
      >
        {(props) => (
          <View style={{ flex: 1, rowGap: 20, alignItems: "center" }}>
            <TextField name="email" label={i18n.t("modules.login.email")} />
            <TextField name="password" label={i18n.t("modules.login.password")} password />
            <Button inverseColors label='Login' formik />

          </View>
        )}




      </Formik>
    </View>
  )
}

export default LoginM