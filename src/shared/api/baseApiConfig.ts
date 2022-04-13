import axios, { AxiosInstance } from 'axios';

export const apiToDoCard: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}api/v0.1/`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` || '',
    },
});

export const apiAuth: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});
