import 'react-native-gesture-handler';

import React, { useContext } from 'react';

import DrawerNavigation from './DrawerNavigation';
import Loading from '@components/Loading';
import Login from '@screens/Login';
import Register from '@screens/Register';
import Splash from '@screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '@context/Authentication';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator initialRouteName="Splash">
      {token === '' ? (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
          <Stack.Screen options={{ headerShown: false }} name="Sign Up" component={Register} />
          <Stack.Screen options={{ headerShown: false }} name="Sign In" component={Login} />
        </>
      ) : (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={DrawerNavigation} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
