import Body from '@components/Body';
import DashHeader from '@components/Header/DashHeader';
import { View } from 'react-native';
import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';

const Dashboard = () => {
  const { theme } = useTheme();
  const styles = createStyle(theme);

  return (
    <View style={styles.dashboard}>
      <DashHeader />
      <Body />
    </View>
  );
};

export default Dashboard;
