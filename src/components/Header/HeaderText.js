import { Text, View } from 'react-native';
import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';
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
