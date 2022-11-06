import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { View } from 'react-native';
import { createStyle } from './Styles';
import { generateUUID } from '@utils';
import { useTheme } from '@context/Theme';
export const Card = () => {
  const { theme } = useTheme();
  const styles = createStyle(theme);

  const handleOnAddNewTask = (title) => {
    const task = {
      id: generateUUID(),
      title: title,
      completed: false,
    };
    addTask(task);
  };

  const removeTask = async (id) => {
    deleteTask(id);
  };

  function onCardItemPress(task) {
    updateTask(task);
  }

  return (
    <View style={styles.card}>
      <CardHeader onAddNewTask={handleOnAddNewTask} />
      <CardBody
        tasks={tasks}
        onCardItemPress={onCardItemPress}
        removeTask={removeTask}
      />
    </View>
  );
};
