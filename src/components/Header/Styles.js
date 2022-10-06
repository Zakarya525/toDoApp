import { fontSizes, spacing } from '@utils';

import { StyleSheet } from 'react-native';

export const createStyle = (theme) => {
  return StyleSheet.create({
    DashboardHeader: {
      flex: 0.6,
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    textLarge: {
      color: theme.color,
      fontFamily: 'Poppins_700Bold',
      fontSize: fontSizes.lg,
    },
    textMedium: {
      fontFamily: 'Poppins_400Regular',
      fontSize: fontSizes.md,
      lineHeight: spacing.xxl,
      marginHorizontal: 30,
      textAlign: 'center',
    },
    header: {
      flex: 0.35,
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
  });
};
