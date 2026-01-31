import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server-a10-seven.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
