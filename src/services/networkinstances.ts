import axios from "axios";



export const axiosInstances = axios.create({
  baseURL: process.env.REACT_APP_NETWORK_INSTANCE_BASE_URL,
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': '*',
    'Access-Control-Allow-Origin': '*',
  },
})

axiosInstances.interceptors.request.use((config: any) => {
  const sessionData = localStorage.getItem('userDetails');
  const userData = sessionData ? JSON.parse(sessionData) : null;
  if(userData) {
    config.headers['Authorization'] = `Bearer ${userData?.accessToken}`
  }

  return config
}, (error) => {
  return Promise.reject(error);
})