import { FlatList } from 'react-native';
import { CardItem } from './CardItem';
import { createStyle } from './Styles';

export const CardBody = ({ tasks, onCardItemPress, removeTask }) => {
  const styles = createStyle(useTheme());
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
