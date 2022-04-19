import { IAction } from "shared/interfaces/IAction";
import { ISignUpData } from "shared/interfaces/ISignUpData";
import { ISignInData } from "shared/interfaces/ISignInData";
import { NavigateFunction } from "react-router";

export enum AuthActionTypes {
  MAKE_SIGNUP_REQUEST = "AUTH/MAKE_SIGNUP_REQUEST",
  MAKE_GET_TOKEN_REQUEST = "AUTH/MAKE_GET_TOKEN_REQUEST",
  IS_LOG_IN = "AUTH/IS_LOG_IN",
}

export type SignUpRequestAction = IAction<AuthActionTypes.MAKE_SIGNUP_REQUEST,
  ISignUpData>;

interface SignInActionData extends ISignInData {
  navigate: NavigateFunction;
}

export type GetTokenRequestAction = IAction<AuthActionTypes.MAKE_GET_TOKEN_REQUEST,
  SignInActionData>;

export type setLogInAction = IAction<AuthActionTypes.IS_LOG_IN, boolean>;

export function singUpRequest(signUpData: ISignUpData): SignUpRequestAction {
  return {
        type: AuthActionTypes.MAKE_SIGNUP_REQUEST,
        payload: signUpData,
    };
}

export function getTokenRequest(
  signInData: SignInActionData
): GetTokenRequestAction {
    return {
        type: AuthActionTypes.MAKE_GET_TOKEN_REQUEST,
        payload: signInData,
    };
}

export function setLogIn(status: boolean): setLogInAction {
    return {
        type: AuthActionTypes.IS_LOG_IN,
        payload: status,
    };
}
