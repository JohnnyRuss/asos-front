import axios, { AxiosInstance } from "axios";
const BASE_URL: string = process.env.REACT_APP_API_ENDPOINT as string;

export const axiosQuery: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
