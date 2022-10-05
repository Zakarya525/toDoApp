import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import { useState } from 'react';
import { useTheme } from '../../context/Theme';
import { createStyle } from './Styles';

const AddNewTaskButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <AntDesign
        name='pluscircleo'
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
        name='checkcircle'
        size={spacing.lg}
        color={colors.addBtnColor}
      />
    </TouchableOpacity>
  );
};

export const CardHeader = ({ onAddNewTask }) => {
  const styles = createStyle(useTheme());
  const [title, setTitle] = useState(null);
  const [isTypeInput, setIsTypeInput] = useState(false);

  const onAddNewCardItem = () => {
    setIsTypeInput(!isTypeInput);
  };

  const handleSubmitNewTask = () => {
    setIsTypeInput(!isTypeInput);
    onAddNewTask(title);
    setTitle('');
  };

  return (
    <View style={styles.cardHeader}>
      {!isTypeInput ? (
        <Text style={styles.text}>Daily Tasks</Text>
      ) : (
        <TextInput
          placeholder='What is on your mind?'
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
