import axios from "axios";

const ApiManager = axios.create({
  baseURL: 'https://todobe-app.herokuapp.com/',
  responseType: 'json',
  withCredentials: true
})

export default ApiManager