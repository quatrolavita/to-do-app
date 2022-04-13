import { takeLatest, put } from 'redux-saga/effects';
import { getToken } from 'shared/api/api';
import { IToken } from 'shared/interfaces/ITokens';
import {
    AuthActionTypes,
    GetTokenRequestAction,
    setToken,
} from '../store/actions';

type ResponseGenerator = {
    config: any;
    data: IToken;
    headers: any;
    request: any;
    status: number;
    statusText: string;
};

function* SignInWorker(action: GetTokenRequestAction) {
    const { payload } = action;

    const response: ResponseGenerator = yield getToken(payload);
    yield put(setToken(response.data));
    localStorage.setItem('token', response.data.access);
}

export default function* SignInWatcher() {
    yield takeLatest(AuthActionTypes.MAKE_GET_TOKEN_REQUEST, SignInWorker);
}
