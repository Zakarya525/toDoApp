import { FlatList, StyleSheet, View } from "react-native";
import { CardItem } from "./CardItem";
import { taskList } from "../../../data/task_list";
import { useState } from "react";

export const CardBody = () => {
  const [tasks, setTasks] = useState(taskList);
  const renderItem = ({ item }) => (
    <CardItem task={item} onPress={onCardItemPress} />
  );

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

  return (
    <FlatList
      style={styles.cardBody}
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(task) => task.id}
    />
  );
};

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    marginTop: 12,
  },
});
