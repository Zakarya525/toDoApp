import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@utils';

const Profile = () => {
  const styles = createStyle(useTheme());
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
