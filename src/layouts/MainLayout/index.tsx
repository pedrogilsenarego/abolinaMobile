import { SafeAreaView, View } from "react-native";

import React from "react";
import Menu from "../../components/Menu";

const MainLayout = (props: any) => {
  return (

    <View>

      {props.children}
    </View>

  );
};
export default MainLayout;
