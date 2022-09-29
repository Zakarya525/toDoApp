import { StyleSheet, Text, View } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import Card from "../Card";
import { useTheme } from "../../context/Theme";

export const Body = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
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

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Tasks List</Text>
      <Card />
    </View>
  );
};
