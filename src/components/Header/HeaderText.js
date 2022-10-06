import { Text, View } from 'react-native';
import React from 'react';

const HeaderText = ({ text }) => {
  const styles = createStyle(useTheme);
  return (
    <View>
      <Text style={styles.textMedium}>{text}</Text>
    </View>
  );
};

export default HeaderText;
