import axios from "axios";
import Cookies from "js-cookie";

// Create an axios instance
const api = axios.create({
  baseURL: "http://localhost:9090/anchor-frost", // your base URL
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authToken"); // get token from cookies
    if (token) {
      config.headers.Authorization = `Basic ${token}`; 
      // or "Bearer" if your backend expects JWTs: `Bearer ${token}`
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
