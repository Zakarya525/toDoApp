import ApiManager from '../ApiManager';

export default getToken = async (state) => {
  try {
    const result = await ApiManager('/users/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${state.token}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
