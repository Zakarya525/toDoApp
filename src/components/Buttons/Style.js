import { colors, fontSizes } from '@utils';

import { StyleSheet } from 'react-native';

export const createStyle = (theme) => {
  return StyleSheet.create({
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
};
