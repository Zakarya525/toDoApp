import { StyleSheet, Text } from "react-native";
import { fontSizes } from "../../utils/sizes";

const HeaderTitle = ({ name }) => {
  return <Text style={styles.text}>Welcome {name}</Text>;
};

export default HeaderTitle;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: fontSizes.lg,
    lineHeight: fontSizes.lg * 2,
    fontFamily: "Poppins_500Medium",
  },
});
