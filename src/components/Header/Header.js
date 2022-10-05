import { View } from 'react-native';
import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderText from './HeaderText';
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
