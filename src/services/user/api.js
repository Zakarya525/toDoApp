import ApiManager from '../ApiManager';

export const registerUser = async (user) => {
  try {
    return await ApiManager('/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      data: JSON.stringify(user),
    });
  } catch (error) {
    console.log(`Failed: ${error}`);
  }
};

export const loginUser = async (username, password) => {
  try {
    return await ApiManager('/login', {
      method: 'POST',
      headers: {
        ContentType: 'application/x-www-form-urlencoded',
      },
      data: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
      ),
    });
  } catch (error) {
    console.log(`Failed: ${error}`);
  }
};

export const getUserMe = async (token) => {
  try {
    return await ApiManager('/users/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(`Failed: ${error}`);
  }
};
