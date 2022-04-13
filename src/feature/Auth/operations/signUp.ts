import { takeLatest } from 'redux-saga/effects';

// api
import { signUp } from 'shared/api/api';

// action types
import { ISignUpData } from 'shared/interfaces/ISignUpData';
import { SignUpRequestAction, AuthActionTypes } from '../store/actions';

type ResponseGenerator = {
    config: any;
    data: Exclude<ISignUpData, 'password'>;
    headers: any;
    request: any;
    status: number;
    statusText: string;
};

function* signUpWorker(action: SignUpRequestAction) {
    const { payload } = action;
    const response: ResponseGenerator = yield signUp(payload);
    console.log('respnse', response);
}

export default function* signUpWatcher() {
    yield takeLatest(AuthActionTypes.MAKE_SIGNUP_REQUEST, signUpWorker);
}
