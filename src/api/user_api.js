import ApiManager from './ApiManager';

export default user_api = async (data) => {
  try {
    const result = await ApiManager('/login', {
      method: 'POST',
      headers: {
        ContentType: 'application/x-www-form-urlencoded',
      },
      data: JSON.stringify(
        `grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`
      ),
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log('Failed');
    console.log(error);
  }
};
