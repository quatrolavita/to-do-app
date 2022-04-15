import { takeLatest } from 'redux-saga/effects';
import { CreateToDoAction, ToDoCardActionTypes } from '../store/actions';
import { createToDoCard } from '../../../shared/api/api';

function* createToDoWorker(action: CreateToDoAction) {
    const { payload } = action;
    const response = yield createToDoCard(payload);
    console.log('create respnse', response);
}

export default function* createToDoWatcher() {
    yield takeLatest(ToDoCardActionTypes.CREATE_CARD, createToDoWorker);
}
