import { useEffect, useState } from "react";
import {
  HomeScreen,
  BookScreen,
  MainMenuScreen,
  ConvertCouponsScreen,
  BookReaderScreen,
} from "./Screens";

import { ROUTE_PATHS } from "../../src/constants/routes";
import Login from "../../src/screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebaseConfig";
import { checkUserSession } from "../slicer/user/user.actions";
import { disableLoading } from "../slicer/general/general.actions";
import * as React from "react";



const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTE_PATHS.LOGIN} component={Login} />
    </AuthStack.Navigator>
  );
};
const ScreensMain = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE_PATHS.HOME}
    >
      <Stack.Screen name={ROUTE_PATHS.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTE_PATHS.BOOK} component={BookScreen} />
      <Stack.Screen
        name={ROUTE_PATHS.BOOK_READER}
        component={BookReaderScreen}
      />
      <Stack.Screen name={ROUTE_PATHS.MAIN_MENU} component={MainMenuScreen} />
      <Stack.Screen
        name={ROUTE_PATHS.CONVERT_COUPONS}
        component={ConvertCouponsScreen}
      />
    </Stack.Navigator>
  );
};

const Screens = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Unsubscribe from the auth state changes when the component unmounts
  }, []);

  useEffect(
    () => {
      dispatch(checkUserSession());
      dispatch(disableLoading());
    },
    // eslint-disable-next-line
    []
  );

  return isAuthenticated ? <ScreensMain /> : <AuthScreens />;
};

export default Screens;
