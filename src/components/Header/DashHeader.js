import { StyleSheet, Text, View } from "react-native";
import ProfileImage from "@components/ProfileImage";
import { fontSizes } from "@utils";
import { useTheme } from "@context/Theme";
import { useAuth } from "@context/Authentication";

const DashHeader = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    header: {
      flex: 0.6,
      marginTop: 30,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    text: {
      color: theme.color,
      fontFamily: "Poppins_700Bold",
      fontSize: fontSizes.lg,
    },
  });
  return (
    <View style={styles.header}>
      <ProfileImage image="" />
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
};

export default DashHeader;
