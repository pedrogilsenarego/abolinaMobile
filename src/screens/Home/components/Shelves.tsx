import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/pallete";
import BottomPopup from "../../../components/BottomPopup";
import { i18n } from "../../../translations/i18n";
import TextField from "../../../components/Inputs/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";

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
      setOpenNewShelfModal(false)
    };
    return (
      <View>
        <Formik
          initialValues={{ ...INITIAL_STATE }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={FORM_VALIDATION}
        >
          {(props) => (
            <View style={{ display: "flex", rowGap: 20, alignItems: "center" }}>
              <TextField
                placeholder={i18n.t("modules.home.shelfs.shelfModal.title")}
                name="addShelf"
                colorLabel={Colors.tealc}
              />
              <Button
                label={i18n.t("modules.home.shelfs.shelfModal.button")}
                formik
              />
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
