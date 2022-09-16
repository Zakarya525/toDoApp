import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils/colors";

export const CardItem = ({ task, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardItem} onPress={() => onPress(task.id)}>
      <Ionicons
        style={styles.icon}
        name={task.completed ? "checkmark-circle" : "checkmark-circle-outline"}
        size={spacing.md + 2}
        color={colors.lightOrange}
      />
      <Text style={[styles.text, task.completed && styles.strikeThroughText]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    flexDirection: "row",
    marginVertical: spacing.sm - 2,
    paddingLeft: spacing.sm,
    alignItems: "center",
  },
  text: {
    paddingLeft: spacing.sm,
    marginBottom: 2,
    fontSize: fontSizes.md + 2,
    flex: 1,
  },
  strikeThroughText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "dashed",
    textDecorationColor: "red",
  },
});
