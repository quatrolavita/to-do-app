import { AxiosResponse } from 'axios';
import { apiAuth, apiToDoCard } from './baseApiConfig';
import { ISignUpData } from '../interfaces/ISignUpData';
import {
    ICreateToDoCardData,
    IUpdateToDoCardData,
} from '../interfaces/IToDoCard';

type SignInData = {
    username: string;
    password: string;
};

// auth

export async function signUp<T = any>(
    signUpData: ISignUpData
): Promise<T | AxiosResponse<T> | undefined> {
    try {
        return await apiAuth.post('signup/', signUpData);
    } catch (error) {
        console.error('sign up error', error);
    }
}

export async function getToken<T = any>(
    signInData: SignInData
): Promise<T | AxiosResponse<T> | undefined> {
    try {
        return await apiAuth.post('token/', signInData);
    } catch (error) {
        console.error('to do list error', error);
    }
}
export async function getToDoCardList<T = any>(): Promise<
    T | AxiosResponse<T> | undefined
> {
    try {
        return await apiToDoCard.get('task-list/');
    } catch (error) {
        console.error('to do list error', error);
    }
}
export async function createToDoCard<T = any>(
    data: ICreateToDoCardData
): Promise<T | AxiosResponse<T> | undefined> {
    try {
        return await apiToDoCard.post('task-list/', data);
    } catch (error) {
        console.error('to do list error', error);
    }
}
export async function deleteToDoCard<T = any>(
    pk: number
): Promise<T | AxiosResponse<T> | undefined> {
    try {
        return await apiToDoCard.delete(`task/${pk}`);
    } catch (error) {
        console.error('to do list error', error);
    }
}
export async function updateToDoCard<T = any>(
    data: IUpdateToDoCardData
): Promise<T | AxiosResponse<T> | undefined> {
    try {
        return await apiToDoCard.put(`task/${data.pk}`, data);
    } catch (error) {
        console.error('to do list error', error);
    }
}
