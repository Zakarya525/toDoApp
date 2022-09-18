import ApiManager from './ApiManager'

export const user_api = async data => {
    try {
        return await ApiManager('/login', {
            method: 'POST',
            headers: {
                ContentType: 'application/x-www-form-urlencoded'
            },
            data: JSON.stringify(`grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`,),
        })
    } catch (error) {
        console.log(error.message)
    }
}
