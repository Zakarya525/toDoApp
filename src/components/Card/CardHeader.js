import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { colors, spacing } from '@utils';
import { AntDesign } from '@expo/vector-icons';
import { createStyle } from './Styles';
import { useState } from 'react';
import { useTheme } from '@context/Theme';

const AddNewTaskButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <AntDesign name="pluscircleo" size={spacing.lg} color={colors.addBtnColor} />
    </TouchableOpacity>
  );
};

const SubmitTaskButton = ({ onSubmit }) => {
  return (
    <TouchableOpacity onPress={() => onSubmit()}>
      <AntDesign name="checkcircle" size={spacing.lg} color={colors.addBtnColor} />
    </TouchableOpacity>
  );
};

export const CardHeader = ({ onAddNewTask }) => {
  const styles = createStyle(useTheme());
  const [isTypeInput, setIsTypeInput] = useState(false);
  const { control, reset, handleSubmit } = useForm();

  const onAddNewCardItem = () => {
    setIsTypeInput(!isTypeInput);
  };

  const handleSubmitNewTask = (data) => {
    setIsTypeInput(!isTypeInput);
    onAddNewTask(data.title);
    reset();
  };

  return (
    <View style={styles.cardHeader}>
      {!isTypeInput ? (
        <Text style={styles.text}>Daily Tasks</Text>
      ) : (
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="What is on your mind?"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
        />
      )}
      {!isTypeInput ? (
        <AddNewTaskButton onPress={onAddNewCardItem} />
      ) : (
        <SubmitTaskButton onSubmit={handleSubmit(handleSubmitNewTask)} />
      )}
    </View>
  );
};
