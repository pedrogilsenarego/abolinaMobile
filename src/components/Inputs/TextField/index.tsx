import React, { useState } from "react";
import { useField } from "formik";
import { View, Text, TextInput, Button } from "react-native";
import { Colors } from "../../../constants/pallete";

interface Props {
  label: string;
  name: string;
  password?: boolean
}

const TextField = ({ label, name, password }: Props) => {
  const [field, meta, helper] = useField(name ?? "");
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View>
        <Text style={{ fontSize: 18 }}>{label}</Text>
        <TextInput
          secureTextEntry={password && !showPassword}
          value={meta.value}
          onChangeText={(e) => helper.setValue(e)}
          underlineColorAndroid='transparent'
          selectionColor='transparent'
          style={{
            borderWidth: 2,
            borderColor: Colors.darkGrey,
            borderRadius: 12,
            paddingHorizontal: 20,
            paddingVertical: 4,
            fontSize: 18
          }}

        />
        {password && (
          <Button
            title={showPassword ? 'Hide' : 'Show'}
            onPress={handleClickShowPassword}
          />
        )}

        {meta.touched && meta.error && (
          <Text style={{ color: "red" }}>{meta.error}</Text>
        )}
      </View>
    </View>
  );
};

export default TextField;
