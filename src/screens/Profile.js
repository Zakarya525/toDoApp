import { useTheme } from '../context/Theme';
import { createStyle } from './Styles';
const Profile = () => {
  const styles = createStyle(useTheme());
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;