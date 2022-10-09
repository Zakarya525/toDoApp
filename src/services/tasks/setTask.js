import storage from '../../storage';
import ApiManager from '../ApiManager';

export default setTask = async (data) => {
  const token = await storage.get('token');
  try {
    const result = await ApiManager('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        title: data.title,
        completed: data.completed,
      }),
    });
    return result;
  } catch (error) {
    console.log('Failed');
    console.log(error);
  }
};
