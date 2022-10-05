import { StyleSheet } from 'react-native';
import { fontSizes } from '../../utilities/sizes';
import colors from '../../utilities/colors';

export const createStyle = () => {
  return StyleSheet.create({
    footer: {
      flex: 0.1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },

    text: {
      fontFamily: 'Poppins_400Regular',
      fontSize: fontSizes.md,
    },

    spanText: {
      color: colors.lightOrange,
      fontFamily: 'Poppins_400Regular',
    },
  });
};
