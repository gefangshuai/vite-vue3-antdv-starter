import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const http = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 30000,
  headers: { 'X-App-Name': import.meta.env.VITE_APP_NAME },
});
export default http;
