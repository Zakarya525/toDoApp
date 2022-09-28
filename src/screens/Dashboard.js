import { StyleSheet, View } from "react-native";
import DashHeader from "../components/Header/DashHeader";
import { colors } from "../utils/colors";
import Body from "../components/Body";
import AuthContext from "../context/Authentication/authContext";
import { useContext } from "react";

const Dashboard = () => {
  const { theme } = useContext(AuthContext);

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
