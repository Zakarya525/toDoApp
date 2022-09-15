import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../utils/colors";

export const CardHeader = () => {
  return (
    <View style={styles.cardHeader}>
      <Text style={styles.text}>Daily Tasks</Text>
      <TouchableOpacity>
        <AntDesign
          name="pluscircleo"
          size={spacing.lg}
          color={colors.lightOrange}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.lightGrey,
    fontSize: fontSizes.md,
    fontFamily: "Roboto_500Medium",
  },
});
