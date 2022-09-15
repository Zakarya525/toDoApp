import { StyleSheet, View } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import { CardHeader } from "./CardHeader";
import { colors } from "../../utils/colors";
import { CardBody } from "./CardBody";

export const Card = () => {
  return (
    <View style={styles.card}>
      <CardHeader />
      <CardBody />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: spacing.xl,
    borderRadius: spacing.md,
    padding: spacing.lg,
  },
  text: {
    fontSize: fontSizes.lg,
  },
});
