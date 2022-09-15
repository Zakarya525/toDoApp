import { Image, StyleSheet, Text } from "react-native";

export const ProfileImage = () => {
  return (
    <Image
      source={require("../../../assets/dummy_image.jpg")}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
});
