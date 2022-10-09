import { FlatList, StyleSheet } from 'react-native';
import { CardItem } from './CardItem';

export const CardBody = ({ tasks, onCardItemPress, removeTask }) => {
  const renderItem = ({ item }) => (
    <CardItem task={item} onPress={onCardItemPress} removeTask={removeTask} />
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
