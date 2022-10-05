import { darkTheme, lightTheme } from "@config/theme";
import { useEffect, useReducer } from "react";
import ThemeReducer from "../Theme/themeReducer";
import ThemeContext from "./themeContext";
import storage from "@app/storage";

export const ThemeProvider = ({ children }) => {
  const initialState = {
    theme: darkTheme,
  };
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const loadPreviousThemePreferences = async () => {
    const theme =
      (await storage.get("themeMode")) === "dark" ? darkTheme : lightTheme;
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
    storage.set("themeMode", theme.themeMode);
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
