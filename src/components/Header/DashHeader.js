import { StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import { ProfileImage } from '../ProfileImage/ProfileImage';
import AuthContext from '../../context/Authentication/authContext';
import { fontSizes } from '../../utils/sizes';
const DashHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.header}>
      <ProfileImage image='' />
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
};

export default DashHeader;

const styles = StyleSheet.create({
  header: {
    flex: 0.6,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: fontSizes.lg,
  },
});
