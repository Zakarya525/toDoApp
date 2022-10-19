import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://159.223.210.36/',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
