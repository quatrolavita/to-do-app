import axios, { AxiosInstance } from 'axios';

export const apiToDoCard: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}api/v0.1/`,
});

export const apiAuth: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});
