import { IAction } from 'shared/interfaces/IAction';

import { AuthActionTypes } from './actions';
import { IToken } from '../../../shared/interfaces/ITokens';

type SignUpInitialStateType = {
    username: string | null;
    token: IToken;
};

const initialState: SignUpInitialStateType = {
    username: null,
    token: { access: '', refresh: '' },
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
        default:
            return state;
    }
}
