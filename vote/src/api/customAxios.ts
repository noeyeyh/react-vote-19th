import axios from "axios";

export const customAxios = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
