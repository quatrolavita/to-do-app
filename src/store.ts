import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return { store };
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
