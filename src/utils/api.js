import axios from 'axios';
import config from './env';
const headers = {
  'sourceChannel': 'MOBILE_APP',
  'Content-Type': 'application/json',
  'sessionId': '1234'
}
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios.create({
  baseURL: config.BASE_URL,
  headers,
});