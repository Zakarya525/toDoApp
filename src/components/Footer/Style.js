import { StyleSheet } from "react-native";
import { colors, fontSizes } from "@utils";

export const createStyle = (theme) => {
  return StyleSheet.create({
    footer: {
      flex: 0.1,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },

    text: {
      fontFamily: "Poppins_400Regular",
      fontSize: fontSizes.md,
    },

    spanText: {
      color: colors.lightOrange,
      fontFamily: "Poppins_400Regular",
    },
  });
};
