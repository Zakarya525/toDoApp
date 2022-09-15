import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as RStatusBar } from "react-native";
import Dashboard from "./src/screens/Dashboard";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
    marginTop: RStatusBar.currentHeight,
  },
});
