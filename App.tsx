import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/slicer/createStore";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainLayout from './src/layouts/MainLayout';
import Home from './src/screens/Home/Home';
import BookC from './src/screens/BookC';
import { ROUTE_PATHS } from './src/constants/routes';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const HomeScreen = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

const BookScreen = ({ route }: any) => {
  const { book } = route.params;
  return <BookC book={book} />;
};

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ROUTE_PATHS.HOME}
          >
            <Stack.Screen name={ROUTE_PATHS.HOME} component={HomeScreen} />
            <Stack.Screen name={ROUTE_PATHS.BOOK} component={BookScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
