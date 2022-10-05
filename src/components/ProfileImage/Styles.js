import { StyleSheet } from 'react-native';

export const createStyle = (theme) => {
  return StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: theme.color,
      borderWidth: 2,
      marginBottom: 12,
    },
  });
};
