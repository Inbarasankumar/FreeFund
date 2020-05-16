import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://35.171.199.103:4800',
});

// API Interceptor for common headers
axiosInstance.interceptors.request.use((config) => {
    config.headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };
    return config;
});

export default {
    get: axiosInstance.get,
    post: axiosInstance.post,
    put: axiosInstance.put,
    patch: axiosInstance.patch,
    delete: axiosInstance.delete,
    axiosInstance() {
        return axiosInstance;
    },
};
