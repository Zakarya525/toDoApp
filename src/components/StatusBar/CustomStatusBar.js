import { StatusBar } from "react-native";
import { useContext } from "react";
import AuthContext from "../../context/Authentication/authContext";

const CustomStatusBar = () => {
  const { theme } = useContext(AuthContext);
  const backgroundColor = theme.themeMode === "dark" ? "black" : "white";
  const statusBarStyle =
    theme.themeMode === "dark" ? "light-content" : "dark-content";
  return (
    <StatusBar backgroundColor={backgroundColor} barStyle={statusBarStyle} />
  );
};

export default CustomStatusBar;
