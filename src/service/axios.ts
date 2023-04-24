import axios from "axios";
const BASE_URL: string = process.env.REACT_APP_API_ENDPOINT as string;

export const axiosQuery = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
