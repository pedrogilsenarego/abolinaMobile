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
    <View style={{}}>
      <TouchableOpacity
        onPress={() => onClick && onClick()}
        style={{
          borderColor: inverseColors ? Colors.tealcTransparent : Colors.tealc,
          borderWidth: 2,
          backgroundColor: inverseColors ? "white" : Colors.tealc,
          alignSelf: "flex-start",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: inverseColors? Colors.tealc:"white", fontSize: 16 }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
