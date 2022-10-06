import { Text, View } from 'react-native';

import Card from '../Card';
import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';

export const Body = () => {
  const styles = createStyle(useTheme());

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Tasks List</Text>
      <Card />
    </View>
  );
};
