import { StyleSheet, View } from "react-native";
import DashHeader from "@components/Header/DashHeader";
import Body from "@components/Body";
import { useTheme } from "@context/Theme";

const Dashboard = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    dashboard: {
      flex: 1,
      backgroundColor: theme.header.background,
    },
  });

  return (
    <View style={styles.dashboard}>
      <DashHeader />
      <Body />
    </View>
  );
};

export default Dashboard;
