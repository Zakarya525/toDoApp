import { Text, View } from 'react-native';
import { ProfileImage } from '../ProfileImage/ProfileImage';
import { useTheme } from '../../context/Theme';
import { useAuth } from '../../context/Authentication';
import { createStyle } from './Styles';

const DashHeader = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const styles = createStyle(theme);

  return (
    <View style={styles.DashboardHeader}>
      <ProfileImage image='' />
      <Text style={styles.textLarge}>{user.username}</Text>
    </View>
  );
};

export default DashHeader;
