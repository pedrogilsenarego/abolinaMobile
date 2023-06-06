import React, { useState } from "react";
import { useField } from "formik";
import { View, Text, TextInput, Button, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/pallete";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  name: string;
  password?: boolean
}

const TextField = ({ label, name, password }: Props) => {
  const [field, meta, helper] = useField(name ?? "");
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { width } = Dimensions.get("window");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View>
        <Text style={{ fontSize: 18, color: "white" }}>{label}</Text>
        <TextInput
          secureTextEntry={password && !showPassword}
          value={meta.value}
          onChangeText={(e) => helper.setValue(e)}
          underlineColorAndroid='transparent'
          selectionColor={Colors.darkGrey}
          style={{
            borderWidth: 2,
            borderColor: Colors.darkGrey,
            backgroundColor: "white",
            borderRadius: 12,
            marginTop: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 18,
            width: width * 0.8,

          }}

        />
        {password && (
          <TouchableOpacity style={{
            position: "absolute",
            right: 10,
            top: "67%",
            transform: [{ translateY: -12 }],
            zIndex: 1,
          }} onPress={handleClickShowPassword}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={23}
              color={Colors.darkGrey}
            />
          </TouchableOpacity>
        )}

        {meta.touched && meta.error && (
          <Text style={{ color: "red" }}>{meta.error}</Text>
        )}
      </View>
    </View>
  );
};

export default TextField;
