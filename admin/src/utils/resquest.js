import axios from 'axios';

const baseURL = import.meta.env.VITE_API_ROOT;
// Function to get the access token from local storage
const getAccessToken = () => localStorage.getItem('token');

const request = axios.create({
    baseURL,
    // headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${getAccessToken()}`, // Initial value
    // },
});

// Intercept requests and update the Authorization header
request.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
});
export const handleRequest = async (method, url, data) => request[method](url, data);
export default request;
