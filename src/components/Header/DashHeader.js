import { StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import { ProfileImage } from '../ProfileImage/ProfileImage';
import AuthContext from '../../context/Authentication/authContext';

const DashHeader = () => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.header}>
      <ProfileImage image='' />
      <Text>{user.username}</Text>
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
});
