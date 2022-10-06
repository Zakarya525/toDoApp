import { Text, View } from 'react-native';
import React from 'react';

const HeaderTitle = ({ text }) => {
  const styles = createStyle(useTheme());
  return (
    <View>
      <Text style={styles.textLarge}>{text}</Text>
    </View>
  );
};

export default HeaderTitle;
