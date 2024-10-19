import axios from "axios";

export const initAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.defaults.withCredentials = true;
  axios.interceptors.response.use((response) => response);
};

