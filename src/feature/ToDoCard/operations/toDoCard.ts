import { put, takeLatest } from 'redux-saga/effects';
import { getToDoCardList } from 'shared/api/api';
import { IToDoCard } from 'shared/interfaces/IToDoCard';
import { setToDoCardList, ToDoCardActionTypes } from '../store/actions';

type ResponseGenerator = {
    config: any;
    data: Array<IToDoCard>;
    headers: any;
    request: any;
    status: number;
    statusText: string;
};

export function* toDoCardWorker() {
    const response: ResponseGenerator = yield getToDoCardList();
    yield put(setToDoCardList(response.data));
}

export default function* toDoCardWatcher() {
    yield takeLatest(
        ToDoCardActionTypes.MAKE_TODO_CARD_LIST_REQUEST,
        toDoCardWorker
    );
}
