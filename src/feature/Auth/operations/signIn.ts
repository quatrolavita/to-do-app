import { takeLatest, call } from "redux-saga/effects";
import { getToken } from "shared/api/api";
import { IToken } from 'shared/interfaces/ITokens';
import { AuthActionTypes, GetTokenRequestAction } from '../store/actions';

type ResponseGenerator = {
    config: any;
    data: IToken;
    headers: any;
    request: any;
    status: number;
    statusText: string;
};

const setTokensToCookie = (access: string, refresh: string): void => {
    document.cookie = `access=${access}`;
    document.cookie = `refresh=${refresh}`;
};

function* SignInWorker(action: GetTokenRequestAction) {
    const { username, password, navigate } = action.payload;

    try {
        const response: ResponseGenerator = yield getToken({
            username,
            password
        });
        yield call(
          setTokensToCookie,
          response.data.access,
          response.data.refresh
        );
        yield call(navigate, "/");
    } catch (error) {
        // @TODO make error handler
    }
}

export default function* SignInWatcher() {
    yield takeLatest(AuthActionTypes.MAKE_GET_TOKEN_REQUEST, SignInWorker);
}
