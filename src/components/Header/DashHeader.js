import { StyleSheet, View } from 'react-native';
import HeaderTitle from './HeaderTitle';
import { ProfileImage } from '../ProfileImage/ProfileImage';

const DashHeader = () => {
  return (
    <View style={styles.header}>
      <ProfileImage image='' />
      <HeaderTitle />
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
