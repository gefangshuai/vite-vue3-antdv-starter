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
  baseURL: '/',
  timeout: 3000,
  headers: { 'X-Custom-Header': 'vite-vue3-antdv-starter' },
});
export default http;
