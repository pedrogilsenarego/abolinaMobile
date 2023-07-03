import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/pallete";
import BottomPopup from "../../../components/BottomPopup";
import { i18n } from "../../../translations/i18n";
import TextField from "../../../components/Inputs/TextField";
import { Formik } from "formik";
import * as Yup from "yup";

const Shelves = () => {
  const [openNewShelfModal, setOpenNewShelfModal] = useState<boolean>(false);

  const createNewShelfContent = () => {
    interface IForm {
      addShelf: string;
    }
    const INITIAL_STATE: IForm = {
      addShelf: "",
    };

    const FORM_VALIDATION = Yup.object().shape({
      addShelf: Yup.string().required(`${i18n.t("forms.required")}`),
    });

    const handleSubmit = (values: IForm) => {
      return;
    };

    return (
      <View style={{height:"40vh"}}>
        <Formik
          initialValues={{ ...INITIAL_STATE }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={FORM_VALIDATION}
        >
          {(props) => (
            <View >
               
              <TextField
                name="addShelf"
                label={i18n.t("modules.home.shelfs.shelfModal.title")}
                colorLabel={Colors.tealc}
              />
              <Text
                style={{
                  color: Colors.tealc,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {i18n.t("modules.home.shelfs.shelfModal.title")}
              </Text>
            </View>
          )}
        </Formik>
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 10, paddingTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity
          onPress={() => setOpenNewShelfModal(true)}
          style={{
            paddingVertical: 7,
            paddingHorizontal: 10,
            backgroundColor: Colors.tealc,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>Create a new shelf +</Text>
        </TouchableOpacity>
      </View>
      <BottomPopup openModal={openNewShelfModal}>
        {createNewShelfContent()}
      </BottomPopup>
    </View>
  );
};

export default Shelves;
