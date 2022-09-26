import ApiManager from './ApiManager';

export default setUser = async (data) => {
  console.log(data);
  try {
    const result = await ApiManager('/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      data: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    return result;
  } catch (error) {
    console.log('Failed');
    console.log(error);
  }
};
