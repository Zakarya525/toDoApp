import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderText from './HeaderText';

const Header = ({ title, text }) => {
  return (
    <View style={styles.header}>
      <HeaderTitle text={title} />
      <HeaderText text={text} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.35,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
