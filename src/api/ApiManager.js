import axios from "axios";

const ApiManager = axios.create({
  baseURL: 'https://ac3f-116-71-10-143.in.ngrok.io/',
  responseType: 'json',
  withCredentials: true
})

export default ApiManager