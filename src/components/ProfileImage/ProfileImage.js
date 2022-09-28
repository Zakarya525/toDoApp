import { Image, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import AuthContext from "../../context/Authentication/authContext";

export const ProfileImage = ({ image }) => {
  const { theme } = useContext(AuthContext);

  const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: theme.color,
      borderWidth: 2,
      marginBottom: 12,
    },
  });
  return (
    <Image
      source={require("../../../assets/dummy_image.jpg")}
      style={styles.image}
    />
  );
};
