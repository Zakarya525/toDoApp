import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { createStyle } from './Style';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@context/Theme';

const Footer = ({ text, link }) => {
  let navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createStyle(theme);

  return (
    <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate(link)}>
      <Text style={styles.text}>
        {text}
        <Text style={styles.spanText}>{link}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default Footer;
