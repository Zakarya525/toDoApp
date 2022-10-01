import { StyleSheet } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";

export const createStyle = (theme) => {
  return StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: theme.background,
      padding: spacing.md,
    },
    text: {
      fontSize: fontSizes.lg,
      color: theme.color,
      fontFamily: "Poppins_400Regular",
    },
  });
};
