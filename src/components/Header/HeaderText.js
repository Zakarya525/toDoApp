import { Text, View } from 'react-native';
import React from 'react';
import { createStyle } from './Styles';
import { useTheme } from '../../context/Theme';


const HeaderText = ({ text }) => {
  const styles = createStyle(useTheme);
  return (
    <View>
      <Text style={styles.textMedium}>{text}</Text>
    </View>
  );
};

export default HeaderText;
