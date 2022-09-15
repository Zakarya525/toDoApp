import { StyleSheet, Text } from "react-native";

const HeaderTitle = ({ name }) => {
  return <Text style={styles.text}>Welcome {name}</Text>;
};

export default HeaderTitle;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 48,
    fontWeight: "bold",
  },
});
