import { put, takeLatest } from 'redux-saga/effects';
import { getToDoCardList } from 'shared/api/api';
import { setToDoCardList, ToDoCardActionTypes } from '../store/actions';

function* toDoCardWorker() {
    const response = yield getToDoCardList();
    yield put(setToDoCardList(response.data));
}

export default function* toDoCardWatcher() {
    yield takeLatest(
        ToDoCardActionTypes.MAKE_TODO_CARD_LIST_REQUEST,
        toDoCardWorker
    );
}
