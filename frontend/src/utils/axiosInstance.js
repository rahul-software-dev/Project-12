import axios from 'axios';
import { getToken } from './storage';

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized. Redirecting to login...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;