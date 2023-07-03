import React, { useState } from "react";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { Colors } from "../../../constants/pallete";
import BottomPopup from "../../../components/BottomPopup";
import { i18n } from "../../../translations/i18n";
import TextField from "../../../components/Inputs/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { CurrentUser } from "../../../slicer/user/user.types";
import { addShelf } from "../../../services/shelfs";
import { updateSuccessNotification } from "../../../slicer/general/general.actions";
import { addNewShelf, checkUserSession } from "../../../slicer/user/user.actions";

const Shelves = () => {
  const [openNewShelfModal, setOpenNewShelfModal] = useState<boolean>(false);
  const currentUser = useSelector<State, CurrentUser>(
    (state) => state.user.currentUser
  );
  const dispatch=useDispatch()


  const createNewShelfContent = () => {
    const [resultAddShelf, setResultAddShelf] = useState<string | null>("");
    interface IForm {
      addShelf: string;
    }
    const INITIAL_STATE: IForm = {
      addShelf: "",
    };
    const FORM_VALIDATION = Yup.object().shape({
      addShelf: Yup.string().required(`${i18n.t("forms.required")}`),
    });

    const handleSubmit = async (values: IForm) => {
        try {
          const result = await addShelf(
            values.addShelf,
            currentUser.id,
            currentUser.shelfs || []
          );
          setResultAddShelf(result);
          Keyboard.dismiss();
          setOpenNewShelfModal(false);
          dispatch(updateSuccessNotification("Shelf Added"))
          setResultAddShelf(null);
          dispatch(addNewShelf(values.addShelf))
        } catch (error: any) {
          setResultAddShelf(error as string);
          // Don't close the modal if there's an error or shelf already exists
        }
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
              <Text>{resultAddShelf}</Text>
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
          columnGap:10
        }}
      >
        {currentUser?.shelfs?.map((shelf,key)=>{
            return (
                <TouchableOpacity
          key={key}
          style={{
            paddingVertical: 7,
            paddingHorizontal: 10,
            backgroundColor: Colors.tealcTransparent,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>
            {shelf.title}
          </Text>
        </TouchableOpacity>
            )
        })}
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
      <BottomPopup openModal={openNewShelfModal} onClose={()=>setOpenNewShelfModal(false)}>
        {createNewShelfContent()}
      </BottomPopup>
    </View>
  );
};

export default Shelves;
