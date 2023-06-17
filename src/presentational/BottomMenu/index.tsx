import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/pallete";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ROUTE_PATHS } from "../../constants/routes";

const BottomMenu = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 75,
        backgroundColor: Colors.tealc,
        justifyContent: "flex-start",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <View
        style={{
          height: 45,
          zIndex: 1000,
          justifyContent: "center",
          alignItems: "flex-end",
          paddingHorizontal: 25,
        }}
      >
        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.navigate(ROUTE_PATHS.MAIN_MENU)}
        >
          <Ionicons name='menu-outline' size={34} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomMenu;
