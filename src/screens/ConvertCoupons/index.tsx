import { useState, useEffect } from "react";
import { View, SafeAreaView, Keyboard, Text } from "react-native";
import { i18n } from "../../translations/i18n";

import { Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../components/Inputs/TextField";
import Button from "../../components/Button";
import { Colors } from "../../constants/pallete";
import { convertCoupons } from "../../services/books";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { CurrentUser } from "../../slicer/user/user.types";
import * as React from "react";
import useNavBottom from "../../hooks/useNavBottom";

interface FORM {
  couppon: string
}

const ConvertCoupons = () => {
  const currentUser = useSelector<State, CurrentUser>((state) => state.user.currentUser)
  const [resultConvert, setResultConvert] = useState<string>("")
  const INITIAL_STATE: FORM = {
    couppon: ""
  };

  useNavBottom({ show: false })

  const handleSubmit = async (values: FORM) => {
    try {
      const result = await convertCoupons(values.couppon, currentUser.id, currentUser.booksOwned);
      setResultConvert(result);
      Keyboard.dismiss();
    } catch (error: any) {
      setResultConvert(error as string);
    }
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
            <Text>
              {resultConvert}
            </Text>
          </View>
        )}
      </Formik>

    </SafeAreaView>
  );
};

export default ConvertCoupons;
