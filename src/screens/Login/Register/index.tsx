import React from "react"
import { View, Keyboard } from "react-native"


import Button from "../../../components/Button";

import { Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../../components/Inputs/TextField";
import { i18n } from "../../../translations/i18n";
import { useDispatch } from "react-redux";
import { signUpUserStart } from "../../../slicer/user/user.actions";

interface FORM {
  name: string;
  email: string;
  password: string;
}

const Register = () => {

  const dispatch = useDispatch()

  const INITIAL_STATE: FORM = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values: FORM) => {
    dispatch(signUpUserStart(values));
    Keyboard.dismiss();
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