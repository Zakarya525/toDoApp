import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "@screens/Dashboard";
import { DrawerContent } from "@components/Drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
