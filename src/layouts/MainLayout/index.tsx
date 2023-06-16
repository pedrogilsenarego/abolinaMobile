import { SafeAreaView, View } from "react-native";

import React from "react";
import Menu from "../../components/Menu";
import BottomMenu from "../../presentational/BottomMenu";

const MainLayout = (props: any) => {
  return (

    <>

      {props.children}
      <BottomMenu />
    </>

  );
};
export default MainLayout;
