import { darkTheme, lightTheme } from "../../config/theme";
import { useEffect, useReducer } from "react";
import ThemeReducer from "../Theme/themeReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeContext from "./themeContext";

export const ThemeProvider = ({ children }) => {
  const initialState = {
    theme: darkTheme,
  };
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const loadPreviousThemePreferences = async () => {
    const themeMode = await AsyncStorage.getItem("themeMode");
    const theme = themeMode === "dark" ? darkTheme : lightTheme;
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
  };

  const toggleTheme = async (isDark) => {
    const theme = isDark ? darkTheme : lightTheme;
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
    AsyncStorage.setItem("themeMode", theme.themeMode);
  };

  useEffect(() => {
    loadPreviousThemePreferences();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
