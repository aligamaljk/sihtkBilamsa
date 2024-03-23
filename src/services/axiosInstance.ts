import axios from 'axios';
import { getStoredToken } from './user-storage';
// import store from './StoreProvider/configureStore';
// import { setUserData } from './StoreProvider/reducers/user';

export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'http://localhost:5000',
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'content-language': 'ar',
    withCredentials: true,
  },
});

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + getStoredToken();
  if(config?.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
});

axiosInstance.interceptors.response.use(null, err => {
  // console.log('interceptors err:', err);
  // console.log('interceptors 222222:', err?.response);
  // console.log('interceptors 44444:', err?.config);
  // const statusCode = err.response.status;
  // if (statusCode === 401) {
  //   store.dispatch(setUserData(null));
  // }
  return err;
});
