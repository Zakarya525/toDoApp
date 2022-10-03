import { StatusBar } from "react-native";
import { useTheme } from "@context/Theme";

const CustomStatusBar = () => {
  const { theme } = useTheme();
  const backgroundColor = theme.themeMode === "dark" ? "black" : "white";
  const statusBarStyle =
    theme.themeMode === "dark" ? "light-content" : "dark-content";
  return (
    <StatusBar backgroundColor={backgroundColor} barStyle={statusBarStyle} />
  );
};

export default CustomStatusBar;
