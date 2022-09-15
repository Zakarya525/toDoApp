import { StyleSheet, Text, View } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import Card from "../Card";
import { colors } from "../../utils/colors";

export const Body = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Tasks List</Text>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.offWhite,
    padding: spacing.md,
  },
  text: {
    fontSize: fontSizes.lg,
    fontFamily: "Roboto_400Regular",
  },
});
