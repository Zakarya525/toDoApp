import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useTheme } from "../../context/Theme";

const Loading = () => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator animating={true} size="large" color={theme.color} />
    </View>
  );
};

export default Loading;
