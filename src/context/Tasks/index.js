import { useContext } from 'react';
import TasksContext from './tasksContext';

export { TasksProvider } from './TasksProvider';
export const useTasks = () => useContext(TasksContext);
