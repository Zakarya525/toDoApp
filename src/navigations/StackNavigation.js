import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Splash'
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Sign Up'
        component={Register}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Sign In'
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Dashboard'
        component={Dashboard}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
