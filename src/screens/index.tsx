import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { ROUTE_PATHS } from "../../src/constants/routes";
import Login from "../../src/screens/Login";
import { auth } from "../config/firebaseConfig";
import { Colors } from "../constants/pallete";
import { disableLoading } from "../slicer/general/general.actions";
import { checkUserSession } from "../slicer/user/user.actions";
import { i18n } from "../translations/i18n";
import {
  BookReaderScreen,
  BookScreen,
  ConvertCouponsScreen,
  HomeScreen,
  MainMenuScreen,
  ShopScreen,
} from "./Screens";
import { stylesScreens } from "./styles";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTE_PATHS.LOGIN} component={Login} />
    </AuthStack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE_PATHS.HOME}
    >
      <Stack.Screen name={ROUTE_PATHS.HOME} component={HomeScreen} />

      <Stack.Screen
        name={ROUTE_PATHS.BOOK_READER}
        component={BookReaderScreen}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE_PATHS.MAIN_MENU}
    >
      <Stack.Screen name={ROUTE_PATHS.MAIN_MENU} component={MainMenuScreen} />
      <Stack.Screen
        name={ROUTE_PATHS.CONVERT_COUPONS}
        component={ConvertCouponsScreen}
      />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_PATHS.SHOP} component={ShopScreen} />
      <Stack.Screen name={ROUTE_PATHS.BOOK} component={BookScreen} />
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

  if (!isAuthenticated) {
    return <AuthScreens />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "white",
          shadowColor: "#000000af",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.45,
          shadowRadius: 3.5,
          elevation: 5,
        },
        headerTintColor: Colors.tealc, // Change the color of the text here
        tabBarShowLabel: false,
        tabBarStyle: {
          ...stylesScreens.shadow,
        },
      }}
    >
      <Tab.Screen
        name={i18n.t("bottomMenu.home")}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 13,
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={27}
                color={focused ? "white" : "#ffffff66"}
              />
              <Text
                style={{
                  color: focused ? "white" : "#ffffff66",
                  fontSize: 8,
                  marginTop: 1,
                }}
              >
                {i18n.t("bottomMenu.home")}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={i18n.t("bottomMenu.shop")}
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 13,
              }}
            >
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={27}
                color={focused ? "white" : "#ffffff66"}
              />
              <Text
                style={{
                  color: focused ? "white" : "#ffffff66",
                  fontSize: 8,
                  marginTop: 1,
                }}
              >
                {i18n.t("bottomMenu.shop")}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={i18n.t("bottomMenu.more")}
        component={SettingsStack}
        options={{
          // tabBarStyle: {
          //   display: "none"
          // },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 13,
              }}
            >
              <Ionicons
                name={focused ? "menu" : "menu-outline"}
                size={27}
                color={focused ? "white" : "#ffffff66"}
              />
              <Text
                style={{
                  color: focused ? "white" : "#ffffff66",
                  fontSize: 8,
                  marginTop: 1,
                }}
              >
                {i18n.t("bottomMenu.more")}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Screens;
