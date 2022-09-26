import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { fontSizes } from '../../utilities/sizes';
import AuthContext from '../../context/Authentication/authContext';

const HeaderTitle = () => {
  const { user } = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: fontSizes.lg,
  },
});
