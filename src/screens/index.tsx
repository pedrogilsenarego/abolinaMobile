import React, { useEffect, useState } from "react"
import Home from "../../src/screens/Home/Home";
import BookC from "../../src/screens/BookC";
import { ROUTE_PATHS } from "../../src/constants/routes";
import Login from "../../src/screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebaseConfig";
import { checkUserSession } from "../slicer/user/user.actions";
import { disableLoading } from "../slicer/general/general.actions";

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
const ScreensMain = () => {
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

const Screens = () => {
  const dispatch = useDispatch()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  useEffect(() => {
    if (auth.currentUser) {
      setIsAuthenticated(true)
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true)
      } else setIsAuthenticated(false)
    })
  }, [])

  useEffect(
    () => {
      dispatch(checkUserSession());
      dispatch(disableLoading())
    },
    // eslint-disable-next-line
    []
  );

  return (
    isAuthenticated ? <ScreensMain /> : <AuthScreens />
  )
}

export default Screens