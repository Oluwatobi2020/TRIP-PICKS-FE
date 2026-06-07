import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", //test basurl
  headers: {
    "Content-Type": "application/json",
    // "API-KEY": import.meta.env.VITE_API_KEY,
  },
  timeout: 30000000, // 30 seconds timeout
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      secureLocalStorage.clear();
      window.location.href = "/";
    }

    // Log only server-side or unexpected errors
    if (!error.response || error.response.status >= 500) {
      console.error("API Error:", error);
    }

    return Promise.reject(error);
  }
);

