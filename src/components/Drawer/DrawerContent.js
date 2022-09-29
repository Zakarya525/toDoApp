import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Caption,
  Drawer,
  Switch,
  Text,
  Title,
  TouchableRipple,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useAuth } from "../../context/Authentication";
import { useTheme } from "../../context/Theme";

const DrawerContent = (props) => {
  const { logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleSwitchDarkTheme(isDark) {
    toggleTheme(isDark);
    setIsDarkTheme(!isDarkTheme);
  }

  useEffect(() => {
    setIsDarkTheme(theme.themeMode === "dark");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../../../assets/dummy_image.jpg")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>zaki@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                handleSwitchDarkTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View>
                  <Switch
                    color="black"
                    value={isDarkTheme}
                    onValueChange={handleSwitchDarkTheme}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            logOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
