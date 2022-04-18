import { IAction } from 'shared/interfaces/IAction';

import { IToken } from 'shared/interfaces/ITokens';
import { AuthActionTypes } from './actions';

type SignUpInitialStateType = {
    username: string | null;
    token: IToken;
    isLogin: boolean;
};

const initialState: SignUpInitialStateType = {
    username: null,
    token: { access: '', refresh: '' },
    isLogin: false,
};

export default function authReducer(
    state = initialState,
    action: IAction<AuthActionTypes>
) {
    switch (action.type) {
        case AuthActionTypes.MAKE_SIGNUP_REQUEST: {
            return { ...state };
        }
        case AuthActionTypes.MAKE_GET_TOKEN_REQUEST: {
            return {
                ...state,
                username: action.payload.username,
            };
        }
        case AuthActionTypes.SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            };
        }
        case AuthActionTypes.IS_LOG_IN: {
            return {
                ...state,
                isLogin: action.payload,
            };
        }
        default:
            return state;
    }
}
