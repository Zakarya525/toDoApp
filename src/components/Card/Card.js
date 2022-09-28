import { StyleSheet, View } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import { CardHeader } from "./CardHeader";
import { colors } from "../../utils/colors";
import { CardBody } from "./CardBody";

import { taskList } from "../../../data/task_list";
import { useContext, useState } from "react";
import generateUUID from "../../utils/functions";
import AuthContext from "../../context/Authentication/authContext";

export const Card = () => {
  const [tasks, setTasks] = useState(taskList);
  const { theme } = useContext(AuthContext);

  const handleOnAddNewTask = (title) => {
    const task = {
      id: generateUUID(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  function onCardItemPress(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: theme.background,
      marginVertical: spacing.xl,
      borderRadius: spacing.md,
      padding: spacing.lg,
    },
  });

  return (
    <View style={styles.card}>
      <CardHeader onAddNewTask={handleOnAddNewTask} />
      <CardBody tasks={tasks} onCardItemPress={onCardItemPress} />
    </View>
  );
};
