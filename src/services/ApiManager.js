import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://todobe-app.herokuapp.com',
  withCredentials: true,
});

export default ApiManager;
