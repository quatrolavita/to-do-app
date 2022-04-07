import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

// reducers
import toDoCardReducer from './feature/ToDoCard/store/reducer';

// sagas

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const reducers = combineReducers({
    toDoCard: toDoCardReducer,
});

function* rootSaga() {
    yield all([]);
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
