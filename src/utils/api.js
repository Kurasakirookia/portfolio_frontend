// utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://portfolio-backend-tgnr.onrender.com'
});

// Add request interceptor to include auth token
API.interceptors.request.use(
  (config) => {
    // Get token from localStorage, sessionStorage, or your auth context
    const token = localStorage.getItem('authToken') || localStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // Or if your backend expects a different format:
      // config.headers['x-auth-token'] = token;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - redirect to login
      localStorage.removeItem('authToken');
      localStorage.removeItem('token');
      window.location.href = '/login'; // or wherever your login page is
    }
    return Promise.reject(error);
  }
);

export default API;