import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import AuthContext from '../context/Authentication/authContext';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { isSignedIn } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName='Splash'>
      {!isSignedIn ? (
        <>
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
        </>
      ) : (
        <Stack.Screen
          options={{ headerShown: false }}
          name='Dashboard'
          component={Dashboard}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
