import { Text, View } from 'react-native';

import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';

const Profile = () => {
  const styles = createStyle(useTheme());
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
