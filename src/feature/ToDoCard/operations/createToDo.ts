import { call, takeLatest } from 'redux-saga/effects';
import { createToDoCard } from 'shared/api/api';
import { CreateToDoAction, ToDoCardActionTypes } from '../store/actions';
import { toDoCardWorker } from './toDoCard';

function* createToDoWorker(action: CreateToDoAction) {
    const { payload } = action;
    try {
        const response = yield createToDoCard(payload);
        yield call(toDoCardWorker);
    } catch (error) {
        // @TODO make error handler
    }
}

export default function* createToDoWatcher() {
    yield takeLatest(ToDoCardActionTypes.CREATE_CARD, createToDoWorker);
}
