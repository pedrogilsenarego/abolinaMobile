import React from "react";
import { View, SafeAreaView, Dimensions, Keyboard } from "react-native";
import { i18n } from "../../translations/i18n";

import { Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../components/Inputs/TextField";
import Button from "../../components/Button";
import { Colors } from "../../constants/pallete";

interface FORM {
  couppon: string
}

const ConvertCoupons = () => {
  const { width } = Dimensions.get("window");
  const INITIAL_STATE: FORM = {
    couppon: ""
  };

  const handleSubmit = (values: FORM) => {

    Keyboard.dismiss();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 60
      }}
    >
      <Formik
        initialValues={{ ...INITIAL_STATE }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={FORM_VALIDATION}
      >
        {(props) => (
          <View style={{ flex: 1, rowGap: 20, alignItems: "center" }}>
            <TextField name="couppon" />
            <Button inverseColors label={i18n.t("modules.mainMenu.cuppons")} formik />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ConvertCoupons;
