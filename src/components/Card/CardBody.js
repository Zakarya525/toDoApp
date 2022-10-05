import { FlatList, StyleSheet } from 'react-native';
import { CardItem } from './CardItem';
import { useTheme } from '../../context/Theme';
import { createStyle } from './Styles';

export const CardBody = ({ tasks, onCardItemPress }) => {
  const styles = createStyle(useTheme());

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
