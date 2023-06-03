import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Colors } from "../../../constants/pallete";

interface Props {
  onClick?: () => void;
  label: string;
  inverseColors?: boolean
}

const Button = ({ label, onClick, inverseColors }: Props) => {
  return (
    <View style={{ alignSelf: "flex-start" }}>
      <TouchableOpacity
        onPress={() => onClick && onClick()}
        style={{
          borderColor: Colors.tealc,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: inverseColors ? "white" : Colors.tealc, fontSize: 16 }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
