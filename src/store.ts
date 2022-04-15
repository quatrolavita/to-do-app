import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

// reducers
import toDoCardReducer from 'feature/ToDoCard/store/reducer';
import authReducer from 'feature/Auth/store/reducer';
import signUpWatcher from './feature/Auth/operations/signUp';
import signInWatcher from './feature/Auth/operations/signIn';
import toDoCardWatcher from './feature/ToDoCard/operations/toDoCard';
import createToDoWatcher from './feature/ToDoCard/operations/createToDo';
import deleteToDoCardWatcher from './feature/ToDoCard/operations/deleteToDo';
import UpdateToDoWatcher from './feature/ToDoCard/operations/updateToDo';

// sagas

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const reducers = combineReducers({
    toDoCard: toDoCardReducer,
    auth: authReducer,
});

function* rootSaga() {
    yield all([
        signUpWatcher(),
        signInWatcher(),
        toDoCardWatcher(),
        createToDoWatcher(),
        deleteToDoCardWatcher(),
        UpdateToDoWatcher(),
    ]);
}

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);

    return { store };
}
