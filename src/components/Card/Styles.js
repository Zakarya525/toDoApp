import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from '@utils/sizes';

export const createStyle = (theme) => {
  return StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: theme.background,
      marginVertical: spacing.xl,
      borderRadius: spacing.md,
      padding: spacing.lg,
    },
    cardBody: {
      flex: 1,
      marginTop: 12,
    },
    container: {
      flex: 1,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      flex: 1,
      color: theme.color,
      fontSize: fontSizes.md,
      fontFamily: 'Poppins_500Medium',
    },
    input: {
      flex: 1,
      color: theme.color,
      fontSize: fontSizes.md,
      fontFamily: 'Poppins_500Medium',
    },
    cardItem: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: spacing.sm - 2,
      paddingLeft: spacing.sm,
      alignItems: 'center',
    },
    textSmall: {
      flex: 1,
      color: theme.color,
      paddingLeft: spacing.sm,
      fontSize: fontSizes.md + 2,
      fontFamily: 'Poppins_300Light',
    },
    strikeThroughText: {
      textDecorationLine: 'line-through',
      textDecorationStyle: 'dashed',
    },
  });
};
