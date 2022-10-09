import storage from '../../storage';
import ApiManager from '../ApiManager';

const modifyTask = async (task) => {
  const token = await storage.get('token');
  try {
    const result = await ApiManager(`/tasks/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        completed: !task.completed,
      }),
    });
    return result;
  } catch (error) {
    console.log('Failed');
    console.log(error);
  }
};

export default modifyTask;
