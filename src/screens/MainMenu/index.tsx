import React from "react";
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import { i18n } from "../../translations/i18n";
import { Colors } from "../../constants/pallete";
import { useNavigation } from "@react-navigation/native";
import { ROUTE_PATHS } from "../../constants/routes";

const MainMenu = () => {
  const { width } = Dimensions.get("window");
  const navigate = useNavigation()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 60
      }}
    >
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigate.navigate(ROUTE_PATHS.CONVERT_COUPONS)}
        style={{
          backgroundColor: Colors.tealc,
          padding: 10,
          alignItems: "center",
          borderRadius: 10,
          width: width * 0.8,
        }}
      >
        <Text style={{ color: "white" }}>
          {i18n.t("modules.mainMenu.cuppons")}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainMenu;