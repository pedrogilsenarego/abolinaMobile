import React from "react"
import { TouchableOpacity, View, Text, Keyboard } from "react-native"
import { useDispatch } from "react-redux";

import Button from "../../../components/Button";

import { Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../../components/Inputs/TextField";

import { recoverPassword } from "../../../slicer/user/user.actions";

import { i18n } from "../../../translations/i18n";

interface FORM {
  email: string;

}

const RecoverPwd = () => {
  const dispatch = useDispatch()


  const INITIAL_STATE: FORM = {
    email: "",

  };
  const handleSubmit = (values: FORM) => {
    Keyboard.dismiss();
    dispatch(recoverPassword(values.email))
  };
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>

      <Formik
        initialValues={{ ...INITIAL_STATE }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={FORM_VALIDATION}
      >
        {(props) => (
          <View style={{ flex: 1, rowGap: 20, alignItems: "center" }}>
            <TextField name="email" label={i18n.t("modules.login.email")} />

            <Button inverseColors label='Recover Password' formik />

          </View>
        )}
      </Formik>
    </View>
  )
}

export default RecoverPwd