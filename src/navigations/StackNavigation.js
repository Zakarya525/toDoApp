import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Loading from "../components/Loading";
import DrawerNavigation from "./DrawerNavigation";
import AuthContext from "../context/Authentication/authContext";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { token, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator initialRouteName="Splash">
      {token === "" ? (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign Up"
            component={Register}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign In"
            component={Login}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={DrawerNavigation}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
