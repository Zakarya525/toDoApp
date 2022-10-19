import { StyleSheet, View } from 'react-native';

import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import generateUUID from '../../utils/functions';
import { spacing } from '../../utils/sizes';
import { useTasks } from '../../context/Tasks';
import { useTheme } from '../../context/Theme';

export const Card = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const { theme } = useTheme();

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

  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: theme.background,
      marginVertical: spacing.xl,
      borderRadius: spacing.md,
      padding: spacing.lg,
    },
  });

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
