import storage from '../../storage';
import ApiManager from '../ApiManager';

const removeTask = async (id) => {
  const token = await storage.get('token');
  try {
    const result = await ApiManager(`/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.log('Failed');
    console.log(error);
  }
};

export default removeTask;
