export const palette = {
  offWhite: '#EeEeEe',
  lightOrange: '#CF7751',
  offLightOrange: '#FAA885',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3',
};

export const fontSizes = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 80,
};

export const theme = {
  colors: {
    background: palette.offWhite,
    primary: palette.lightOrange,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },

  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    xxxl: 80,
  },

  textVariants: {
    header: {
      fontFamily: 'Poppins_700Bold',
      fontSize: fontSizes.lg,
    },

    body: {
      fontFamily: 'Poppins_400Bold',
      fontSize: fontSizes.md,
      lineHeight: spacing.xxl,
      marginHorizontal: 30,
      textAlign: 'center',
    },
  },
};
