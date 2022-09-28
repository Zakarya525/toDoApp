import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Dashboard'>
      <Drawer.Screen name='Dashboard' component={Dashboard} />
      <Drawer.Screen name='Profile' component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
