import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStyle } from './Styles';

const Footer = ({ text, link }) => {
  const styles = createStyle();

  let navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.footer}
      onPress={() => navigation.navigate(link)}>
      <Text style={styles.text}>
        {text}
        <Text style={styles.spanText}>{link}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default Footer;
