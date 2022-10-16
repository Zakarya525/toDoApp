import ApiManager from '../ApiManager';
import storage from '../../storage';

export default getTask = async (state) => {
  const token = await storage.get('token');
  if (token == null) return;
  try {
    const result = await ApiManager('/tasks', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
