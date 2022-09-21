import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import colors from '../../utilities/colors';
import { fontSizes } from '../../utilities/sizes';

const ButtonSecondary = ({ name, submitHandler }) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={submitHandler}>
        <Text style={styles.btnText}>{name}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: colors.offLightOrange,
  },

  btnText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: fontSizes.md,
    color: colors.white,
  },
});
