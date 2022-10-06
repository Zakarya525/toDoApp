import { Pressable, Text, View } from 'react-native';

import React from 'react';
import { createStyle } from './Style';
import { useTheme } from '@context/Theme';

const ButtonSecondary = ({ name, submitHandler }) => {
  const { theme } = useTheme();
  const styles = createStyle(theme);
  return (
    <View>
      <Pressable style={styles.button} onPress={submitHandler}>
        <Text style={styles.btnText}>{name}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonSecondary;
