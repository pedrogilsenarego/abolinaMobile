
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/slicer/createStore";
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Screens from "./src/screens";
import Snackbar from "./src/components/SnackBar";



const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};


export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  const queryClient = new QueryClient();




  if (!loaded) return null;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer theme={theme}>
            <Snackbar />
            <Screens />
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}


