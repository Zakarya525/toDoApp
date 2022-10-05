import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontSizes, spacing } from "@utils";

const HeaderText = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: fontSizes.md,
    lineHeight: spacing.xxl,
    marginHorizontal: 30,
    textAlign: "center",
  },
});
