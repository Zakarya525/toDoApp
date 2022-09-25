import ApiManager from './ApiManager';

export default user_api = async (data) => {
  try {
    const result = await ApiManager('/register', {
      method: 'POST',
      headers: {
        ContentType: 'application/x-www-form-urlencoded',
      },
      data: JSON.stringify(
        (username = data.username),
        (email = data.email),
        (password = data.password)
      ),
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log('Failed');
    console.log(error);
  }
};
