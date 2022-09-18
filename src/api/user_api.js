import ApiManager from './ApiManager'

export default user_api = async data => {
  console.warn(data);
  try {
    const result = await ApiManager.post('/login', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(
        `grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`,
      ),

    })
    console.log(result);
    return result
  } catch (error) {
    console.log(error)  
  }
}