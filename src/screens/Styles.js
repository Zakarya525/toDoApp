import { colors, fontSizes, spacing } from '@utils';

import { StyleSheet } from 'react-native';

export const createStyle = (theme) => {
  return StyleSheet.create({
    dashboard: {
      flex: 1,
      backgroundColor: theme.header.background,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.offWhite,
    },

    input: {
      width: 320,
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

    error: {
      marginLeft: 30,
      color: colors.red,
      fontFamily: 'Poppins_400Regular_Italic',
    },

    img: {
      width: 250,
      height: 250,
      opacity: 0.9,
    },
  });
};
