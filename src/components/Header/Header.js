import { StyleSheet, View } from "react-native";
import HeaderTitle from "./HeaderTitle";
import { ProfileImage } from "../ProfileImage/ProfileImage";

const Header = () => {
  return (
    <View style={styles.header}>
      <ProfileImage />
      <HeaderTitle name="Furqan" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.6,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
