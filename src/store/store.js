import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
});
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);
