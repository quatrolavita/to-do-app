import { IAction } from 'shared/interfaces/IAction';
import { ISignUpData } from 'shared/interfaces/ISignUpData';
import { IToken } from 'shared/interfaces/ITokens';
import { ISignInData } from '../../../shared/interfaces/ISignInData';

export enum AuthActionTypes {
    MAKE_SIGNUP_REQUEST = 'AUTH/MAKE_SIGNUP_REQUEST',
    MAKE_GET_TOKEN_REQUEST = 'AUTH/MAKE_GET_TOKEN_REQUEST',
    SET_TOKEN = 'AUTH/SET_TOKEN',
}

export type SignUpRequestAction = IAction<
    AuthActionTypes.MAKE_SIGNUP_REQUEST,
    ISignUpData
>;

export type GetTokenRequestAction = IAction<
    AuthActionTypes.MAKE_GET_TOKEN_REQUEST,
    ISignInData
>;

export type SetTokenAction = IAction<AuthActionTypes.SET_TOKEN, IToken>;

export function singUpRequest(signUpData: ISignUpData): SignUpRequestAction {
    return {
        type: AuthActionTypes.MAKE_SIGNUP_REQUEST,
        payload: signUpData,
    };
}

export function getTokenRequest(
    signInData: ISignInData
): GetTokenRequestAction {
    return {
        type: AuthActionTypes.MAKE_GET_TOKEN_REQUEST,
        payload: signInData,
    };
}

export function setToken(tokens: IToken): SetTokenAction {
    return {
        type: AuthActionTypes.SET_TOKEN,
        payload: tokens,
    };
}
