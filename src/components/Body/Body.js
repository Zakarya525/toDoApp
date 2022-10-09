import { Text, View } from "react-native";
import Card from "../Card";
import { useTheme } from "../../context/Theme";
import { createStyle } from "./Styles";

export const Body = () => {
  const styles = createStyle(useTheme());

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Tasks List</Text>
      <Card />
    </View>
  );
};
