import { FlatList, StyleSheet } from "react-native";
import { CardItem } from "./CardItem";

export const CardBody = ({ tasks, onCardItemPress }) => {
  const renderItem = ({ item }) => (
    <CardItem task={item} onPress={onCardItemPress} />
  );

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


function even() {
  console.log("good")
}

function print_log(func){
  func()
}

print_log(even)

