
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { createStyle } from './Styles';

const ButtonSecondary = ({ name, submitHandler }) => {
  const styles = createStyle();
  return (
    <View>
      <Pressable style={styles.button} onPress={submitHandler}>
        <Text style={styles.btnText}>{name}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonSecondary;
