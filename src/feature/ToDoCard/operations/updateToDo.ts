import { takeLatest, call } from 'redux-saga/effects';
import { updateToDoCard } from 'shared/api/api';
import { ToDoCardActionTypes, UpdateToDoAction } from '../store/actions';
import { toDoCardWorker } from './toDoCard';

function* UpdateToDoWorker(action: UpdateToDoAction) {
    const { payload } = action;

    yield updateToDoCard(payload);
    yield call(toDoCardWorker);
}

export default function* UpdateToDoWatcher() {
    yield takeLatest(ToDoCardActionTypes.UPDATE_CARD, UpdateToDoWorker);
}
