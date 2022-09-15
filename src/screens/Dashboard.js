import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { colors } from "../utils/colors";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Header />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    flex: 0.4,
    backgroundColor: colors.lightOrange,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});
