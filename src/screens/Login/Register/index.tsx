import React from "react"
import { View, Text } from "react-native"


import Button from "../../../components/Button";

import { Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../../components/Inputs/TextField";
import { createAccount } from "../../../services/user";
import { i18n } from "../../../translations/i18n";

interface FORM {
  name: string;
  email: string;
  password: string;
}

const Register = () => {



  const INITIAL_STATE: FORM = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values: FORM) => {
    createAccount(values)
  };
  return (
    <View>

      <Formik
        initialValues={{ ...INITIAL_STATE }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={FORM_VALIDATION}
      >
        {(props) => (
          <View style={{ flex: 1, rowGap: 20 }}>
            <TextField name="name" label={i18n.t("modules.login.name")} />
            <TextField name="email" label={i18n.t("modules.login.email")} />
            <TextField name="password" label={i18n.t("modules.login.password")} password />
            <Button label='Register' formik />

          </View>
        )}




      </Formik>
    </View>
  )
}

export default Register