import axios from 'axios';

export const BASE_URL = 'http://localhost:3000';

// axios实例
const axiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => console.log('requestError::', err)
)

export { axiosInstance };

