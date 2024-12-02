import React, { useEffect, useState } from 'react';
import API from '../api';
import axios from 'axios';

const registerUser = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3001/api/auth/register', { username, password });
        console.log(response.data);
    } catch (error) {
        console.error(error.response.data);
    }
};

const loginUser = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3001/api/auth/login', { username, password });
        console.log(response.data); // The token will be in response.data.token
    } catch (error) {
        console.error(error.response.data);
    }
};

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await API.get('/profile');
                setUser(response.data);
            } catch (error) {
                console.error(error.response?.data?.message || 'Failed to load profile');
            }
        };
        fetchUser();
    }, []);

    return user ? <h1>Welcome, User ID: {user.message}</h1> : <p>Loading...</p>;
};

export default ProfilePage;
