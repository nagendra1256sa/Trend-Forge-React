import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_NETWORK_INSTANCE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('atk');
    
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
