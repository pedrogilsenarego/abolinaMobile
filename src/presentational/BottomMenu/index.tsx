import React from "react";
import { View } from "react-native";
import { Colors } from "../../constants/pallete";
import { Ionicons } from "@expo/vector-icons";

const BottomMenu = () => {
  return (
    <View style={{
      height: 80, backgroundColor: Colors.tealc, justifyContent: "flex-start", position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <View
        style={{

          height: 50,

          zIndex: 1000,
          justifyContent: "center",
          alignItems: "flex-end",
          paddingHorizontal: 15

        }}
      >
        <Ionicons name='menu-outline' size={26} color='white' />
      </View>
    </View>
  );
};
export default BottomMenu;
