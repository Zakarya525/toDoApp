import { StyleSheet } from 'react-native';
import { fontSizes } from '../../utils/sizes';
import colors from '../../utilities/colors';

export const createStyle = () => {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 320,
      height: 50,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 10,
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
