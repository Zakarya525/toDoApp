import { Image, StyleSheet } from 'react-native';
import { useTheme } from '../../context/Theme';
import { createStyle } from './Styles';

export const ProfileImage = ({ image }) => {
  const { theme } = useTheme();
  const styles = createStyle(theme);

  return (
    <Image
      source={require('../../../assets/dummy_image.jpg')}
      style={styles.image}
    />
  );
};
