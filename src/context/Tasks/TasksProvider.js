import { useEffect, useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';
import setTask from '../../services/tasks/setTask';
import getTask from '../../services/tasks/getTask';
import modifyTask from '../../services/tasks/modifyTask';
import removeTask from '../../services/tasks/removeTask';
import { useAuth } from '../Authentication';

export const TasksProvider = ({ children }) => {
  const initialState = {
    tasks: [],
  };

  const { isLoading } = useAuth();

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  //Add new Task
  const addTask = async (task) => {
    const res = await setTask(task);
    if (res.status !== 200) throw new Error('Task not added.');
    const newTasks = [...state.tasks, res.data];
    dispatch({
      type: 'SET_TASKS',
      payload: newTasks,
    });
  };

  //Patch Task
  const updateTask = async (task) => {
    console.log(task);
    const res = await modifyTask(task);
    if (res.status !== 200) throw new Error('Task not modified.');
    dispatch({
      type: 'SET_TASKS',
      payload: state.tasks.map((t) => {
        if (t.id === task.id) {
          task.completed = !task.completed;
        }
        return t;
      }),
    });
  };

  //Delete Task
  const deleteTask = async (id) => {
    const res = await removeTask(id);
    if (res.status !== 202) throw new Error('Task not Deleted.');
    dispatch({
      type: 'SET_TASKS',
      payload: state.tasks.filter((task) => task.id !== id),
    });
  };

  //Get Tasks
  useEffect(() => {
    getTask().then((res) => {
      if (res.status === 200) {
        dispatch({
          type: 'SET_TASKS',
          payload: res.data,
        });
      }
    });
  }, [isLoading]);

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        updateTask,
        deleteTask,
      }}>
      {children}
    </TasksContext.Provider>
  );
};
