import { takeLatest } from 'redux-saga/effects';
import { DeleteToDoAction, ToDoCardActionTypes } from '../store/actions';
import { deleteToDoCard } from '../../../shared/api/api';

function* deleteTodoCardWorker(action: DeleteToDoAction) {
    const { payload } = action;

    const response = yield deleteToDoCard(payload);
    console.log('response', response);
}

export default function* deleteToDoCardWatcher() {
    yield takeLatest(ToDoCardActionTypes.DELETE_CARD, deleteTodoCardWorker);
}
