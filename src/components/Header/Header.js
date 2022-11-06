import HeaderText from './HeaderText';
import HeaderTitle from './HeaderTitle';
import React from 'react';
import { View } from 'react-native';
import { createStyle } from './Styles';
import { useTheme } from 'react-navigation';

const Header = ({ title, text }) => {
  const styles = createStyle(useTheme());
  return (
    <View style={styles.header}>
      <HeaderTitle text={title} />
      <HeaderText text={text} />
    </View>
  );
};

export default Header;
