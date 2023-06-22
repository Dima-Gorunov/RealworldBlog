import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODVjNjJiNjBjNjc1MWIwMGI3ODMxOSIsInVzZXJuYW1lIjoiZGltYTAxMTExIiwiZXhwIjoxNjkxNjcyNjE5LCJpYXQiOjE2ODY0ODg2MTl9.j7iJXmUZAagK1NjazObo7DZzf4Rm3U3ZBOMFhZXTQCc';
const instance = axios.create({
  baseURL: 'https://blog.kata.academy/api/',
});

const authInstance = axios.create({
  baseURL: 'https://blog.kata.academy/api/',
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authInstance.interceptors.request.use(authInterceptor);

export { instance, authInstance };
