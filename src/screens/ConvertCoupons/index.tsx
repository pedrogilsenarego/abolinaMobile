import { useEffect, useState } from "react";
import { Keyboard, SafeAreaView, Text, View } from "react-native";
import { i18n } from "../../translations/i18n";

import { Formik } from "formik";
import * as React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import TextField from "../../components/Inputs/TextField";
import { Colors } from "../../constants/pallete";
import useNavBottom from "../../hooks/useNavBottom";
import { convertCoupons } from "../../services/books";
import { State } from "../../slicer/types";
import { CurrentUser } from "../../slicer/user/user.types";
import { FORM_VALIDATION } from "./validation";

interface FORM {
  couppon: string;
}

const ConvertCoupons = () => {
  const currentUser = useSelector<State, CurrentUser>(
    (state) => state.user.currentUser
  );
  const [resultConvert, setResultConvert] = useState<string>("");
  const INITIAL_STATE: FORM = {
    couppon: "",
  };

  useNavBottom({ show: false });

  const handleSubmit = async (values: FORM) => {
    try {
      const result = await convertCoupons(
        values.couppon,
        currentUser.id,
        currentUser.booksOwned
      );
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
        paddingTop: 60,
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
            <Button
              inverseColors
              label={i18n.t("modules.mainMenu.cuppons")}
              formik
            />
            <Text>{resultConvert}</Text>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ConvertCoupons;
