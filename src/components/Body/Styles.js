import { fontSizes, spacing } from '@utils';

import { StyleSheet } from 'react-native';

export const createStyle = (theme) => {
  return StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: theme.background,
      padding: spacing.md,
    },
    text: {
      fontSize: fontSizes.lg,
      color: theme.color,
      fontFamily: 'Poppins_400Regular',
    },
  });
};
