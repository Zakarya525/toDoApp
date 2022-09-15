import { FlatList, StyleSheet, View } from "react-native";
import { CardItem } from "./CardItem";
import { taskList } from "../../../data/task_list";

export const CardBody = () => {
  const renderItem = ({ item }) => <CardItem task={item} />;

  return (
    <FlatList
      style={styles.cardBody}
      data={taskList}
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
