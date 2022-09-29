import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils/colors";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/Theme";

export const CardItem = ({ task, onPress }) => {
  const { theme } = useTheme();
  const [sound, setSound] = useState();

  async function onTaskItemPress(task) {
    onPress(task.id);
    if (!task.completed) return;
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/done.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const styles = StyleSheet.create({
    cardItem: {
      flex: 1,
      flexDirection: "row",
      marginVertical: spacing.sm - 2,
      paddingLeft: spacing.sm,
      alignItems: "center",
    },
    text: {
      flex: 1,
      color: theme.color,
      paddingLeft: spacing.sm,
      fontSize: fontSizes.md + 2,
      fontFamily: "Poppins_300Light",
    },
    strikeThroughText: {
      textDecorationLine: "line-through",
      textDecorationStyle: "dashed",
    },
  });
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => onTaskItemPress(task)}
    >
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
