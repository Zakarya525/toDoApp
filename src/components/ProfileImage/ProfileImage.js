import { Image, StyleSheet } from "react-native";
import { useTheme } from "../../context/Theme";

export const ProfileImage = ({ image }) => {
  const { theme } = useTheme();

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
