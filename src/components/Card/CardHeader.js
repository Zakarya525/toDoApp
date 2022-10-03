import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors, fontSizes, spacing } from "@utils";
import { useState } from "react";
import { useTheme } from "@context/Theme";

const AddNewTaskButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <AntDesign
        name="pluscircleo"
        size={spacing.lg}
        color={colors.addBtnColor}
      />
    </TouchableOpacity>
  );
};

const SubmitTaskButton = ({ onSubmit }) => {
  return (
    <TouchableOpacity onPress={() => onSubmit()}>
      <AntDesign
        name="checkcircle"
        size={spacing.lg}
        color={colors.addBtnColor}
      />
    </TouchableOpacity>
  );
};

export const CardHeader = ({ onAddNewTask }) => {
  const { theme } = useTheme();
  const [title, setTitle] = useState(null);
  const [isTypeInput, setIsTypeInput] = useState(false);

  const onAddNewCardItem = () => {
    setIsTypeInput(!isTypeInput);
  };

  const handleSubmitNewTask = () => {
    setIsTypeInput(!isTypeInput);
    onAddNewTask(title);
    setTitle("");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      flex: 1,
      color: theme.color,
      fontSize: fontSizes.md,
      fontFamily: "Poppins_500Medium",
    },
    input: {
      flex: 1,
      color: theme.color,
      fontSize: fontSizes.md,
      fontFamily: "Poppins_500Medium",
    },
  });

  return (
    <View style={styles.cardHeader}>
      {!isTypeInput ? (
        <Text style={styles.text}>Daily Tasks</Text>
      ) : (
        <TextInput
          placeholder="What is on your mind?"
          style={styles.input}
          onChangeText={(text) => setTitle(text)}
        />
      )}
      {!isTypeInput ? (
        <AddNewTaskButton onPress={onAddNewCardItem} />
      ) : (
        <SubmitTaskButton onSubmit={handleSubmitNewTask} />
      )}
    </View>
  );
};
