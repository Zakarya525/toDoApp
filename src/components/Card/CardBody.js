import { CardItem } from './CardItem';
import { FlatList } from 'react-native';
import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';

export const CardBody = ({ tasks, onCardItemPress }) => {
  const styles = createStyle(useTheme());

  const renderItem = ({ item }) => <CardItem task={item} onPress={onCardItemPress} />;

  return (
    <FlatList
      style={styles.cardBody}
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(task) => task.id}
    />
  );
};
