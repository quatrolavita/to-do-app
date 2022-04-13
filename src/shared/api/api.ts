import { AxiosResponse } from 'axios';
import { apiAuth, apiToDoCard } from './baseApiConfig';
import { ISignUpData } from '../interfaces/ISignUpData';

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
