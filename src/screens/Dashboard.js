import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { colors } from "../utils/colors";
import Body from "../components/Body";
import { spacing } from "../utils/sizes";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Header />
      <Body />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  text: {
    color: "white",
    fontSize: spacing.xxl + 2,
    lineHeight: spacing.xxxl + 4,
    fontWeight: "bold",
    textAlign: "center",
  },
});
