import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

// reducers
import toDoCardReducer from 'feature/ToDoCard/store/reducer';
import authReducer from 'feature/Auth/store/reducer';
import signUpWatcher from './feature/Auth/operations/signUp';
import signInWatcher from './feature/Auth/operations/signIn';
import toDoCardWatcher from './feature/ToDoCard/operations/toDoCard';

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
    yield all([signUpWatcher(), signInWatcher(), toDoCardWatcher()]);
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
