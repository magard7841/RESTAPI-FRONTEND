import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3001/api/auth', // Replace with your backend URL
});

API.defaults.headers.common['Content-Type'] = 'application/json';
API.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`;


API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;



