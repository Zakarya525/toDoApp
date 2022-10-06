import React, { useEffect, useState } from "react";
import { View } from "react-native";
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

import { useAuth } from "@context/Authentication";
import { useTheme } from "@context/Theme";
import { createStyle } from "./Style";

const DrawerContent = (props) => {
  const { logOut, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const styles = createStyle(theme);
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
                <Title style={styles.title}>{user.username}</Title>
                <Caption style={styles.caption}>{user.email}</Caption>
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
