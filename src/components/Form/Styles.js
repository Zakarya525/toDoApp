import { StyleSheet } from 'react-native';
import colors from '../../utilities/colors';
import { fontSizes } from '../../utilities/sizes';
import { spacing } from '../../utilities/sizes';

export const createStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 0.4,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },

    inputContainer: {
      width: '100%',
    },

    input: {
      width: 350,
      margin: 12,
      padding: 12,
      borderRadius: 30,
      backgroundColor: colors.white,
      fontFamily: 'Poppins_400Regular',
    },

    text: {
      fontFamily: 'Poppins_400Regular',
      fontSize: fontSizes.md,
      lineHeight: spacing.xxl,
    },

    spanText: {
      color: colors.lightOrange,
      fontFamily: 'Poppins_400Regular',
    },
  });
};
