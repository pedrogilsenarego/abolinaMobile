import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/pallete";
import React from "react";

const MenuBar = () => {
  return (
    <View style={{ backgroundColor: Colors.tealc, padding: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 5,
          borderRadius: 2,
          alignSelf: 'flex-start',
          borderWidth: 2,
          borderColor: "grey"
        }}
      >
        <Text style={{ color: "white" }}>Todos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
