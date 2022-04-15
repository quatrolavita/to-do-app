import { takeLatest } from 'redux-saga/effects';
import { updateToDoCard } from 'shared/api/api';
import { ToDoCardActionTypes, UpdateToDoAction } from '../store/actions';

function* UpdateToDoWorker(action: UpdateToDoAction) {
    const { payload } = action;

    const response = yield updateToDoCard(payload);
    console.log('response Update', response);
}

export default function* UpdateToDoWatcher() {
    yield takeLatest(ToDoCardActionTypes.UPDATE_CARD, UpdateToDoWorker);
}
