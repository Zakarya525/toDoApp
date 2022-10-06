import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { View } from 'react-native';
import { createStyle } from './Styles';
import { generateUUID } from '@utils';
import { taskList } from '../../../data/task_list';
import { useState } from 'react';
import { useTheme } from '@context/Theme';
export const Card = () => {
  const [tasks, setTasks] = useState(taskList);
  const { theme } = useTheme();
  const styles = createStyle(theme);

  const handleOnAddNewTask = (title) => {
    const task = {
      id: generateUUID(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  function onCardItemPress(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  return (
    <View style={styles.card}>
      <CardHeader onAddNewTask={handleOnAddNewTask} />
      <CardBody tasks={tasks} onCardItemPress={onCardItemPress} />
    </View>
  );
};
