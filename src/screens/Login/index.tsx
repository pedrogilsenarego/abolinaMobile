import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete";
import Button from "../../components/Button";

import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../components/Inputs/TextField";

interface FORM {
  email: string;
  password: string;
}

const Login = () => {
  const [test, setTest] = useState<any>({ email: "blank", password: "blank" })
  const INITIAL_STATE: FORM = {
    email: "",
    password: "",
  };
  const handleSubmit = (values: FORM) => {
    setTest({ email: values.email, password: values.password });
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
            <Text>{test.email} {test.password}</Text>
          </View>
        )}




      </Formik>
    </SafeAreaView>
  );
};

export default Login;
