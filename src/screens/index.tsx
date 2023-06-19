import { useEffect, useState } from "react";
import {
  HomeScreen,
  BookScreen,
  MainMenuScreen,
  ConvertCouponsScreen,
  BookReaderScreen,
  ShopScreen,
} from "./Screens";
import { StyleSheet, View, Image, Text } from "react-native";
import { ROUTE_PATHS } from "../../src/constants/routes";
import Login from "../../src/screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebaseConfig";
import { checkUserSession } from "../slicer/user/user.actions";
import { disableLoading } from "../slicer/general/general.actions";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../constants/pallete";
import { Ionicons } from "@expo/vector-icons";



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
      <Stack.Screen name={ROUTE_PATHS.BOOK} component={BookScreen} />
      <Stack.Screen
        name={ROUTE_PATHS.BOOK_READER}
        component={BookReaderScreen}
        options={{
          headerShown: false
        }}
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
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.tealc,
          left: 20,
          right: 20,

          borderRadius: 15,
          position: "absolute",
          bottom: 30,
          height: 60,
          ...style.shadow,
        },
        tabBarActiveTintColor: "white", // Set the active button color
        tabBarInactiveTintColor: "#ffffff66", // Set the inactive button color
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: focused ? 1 : 14,
                backgroundColor: Colors.tealc,
                borderRadius: 12,
                width: 45,
                height: 45,
                ...style.shadow2,

              }}
            >
              <Ionicons
                name='home-outline'
                size={27}
                color={focused ? "white" : "#ffffff66"}
              />
              <Text
                style={{ color: focused ? "white" : "#ffffff66", fontSize: 8 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name='Shop' component={ShopStack} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: focused ? 1 : 14,
              backgroundColor: Colors.tealc,
              borderRadius: 12,
              width: 45,
              height: 45,
              ...style.shadow2,

            }}
          >
            <Ionicons
              name='cart-outline'
              size={27}
              color={focused ? "white" : "#ffffff66"}
            />
            <Text
              style={{ color: focused ? "white" : "#ffffff66", fontSize: 8 }}
            >
              SHOP
            </Text>
          </View>
        ),
      }} />
      <Tab.Screen name='Settings' component={SettingsStack} options={({ route }) => ({

        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: focused ? 1 : 14,
              backgroundColor: Colors.tealc,
              borderRadius: 12,
              width: 45,
              height: 45,
              ...style.shadow2,

            }}
          >
            <Ionicons
              name='settings-outline'
              size={27}
              color={focused ? "white" : "#ffffff66"}
            />
            <Text
              style={{ color: focused ? "white" : "#ffffff66", fontSize: 8 }}
            >
              SETTINGS
            </Text>
          </View>
        ),
      })} />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000000af",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.5,
    elevation: 5,
  },
  shadow2: {
    shadowColor: "#000000af",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 4,
  },
});

export default Screens;
