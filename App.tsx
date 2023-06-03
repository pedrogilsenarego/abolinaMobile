
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/slicer/createStore";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./src/screens/Home/Home";
import BookC from "./src/screens/BookC";
import { ROUTE_PATHS } from "./src/constants/routes";
import Login from "./src/screens/Login";

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};


const Stack = createStackNavigator();
const AuthStack = createStackNavigator()

const BookScreen = ({ route }: any) => {
  const { book } = route.params;
  return (

    <BookC book={book} />

  );
};
const AuthScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTE_PATHS.LOGIN} component={Login} />
    </AuthStack.Navigator>
  )
}
const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE_PATHS.HOME}
    >
      <Stack.Screen name={ROUTE_PATHS.HOME} component={Home} />
      <Stack.Screen name={ROUTE_PATHS.BOOK} component={BookScreen} />
    </Stack.Navigator>
  )

}





export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={theme}>
          {isAuthenticated ? <Screens /> : <AuthScreens />}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


