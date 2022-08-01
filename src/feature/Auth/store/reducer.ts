import { IAction } from 'shared/interfaces/IAction';
import { AuthActionTypes } from './actions';

type SignUpInitialStateType = {
    username: string | null;
    isLogin: boolean;
};

const initialState: SignUpInitialStateType = {
    username: null,
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
