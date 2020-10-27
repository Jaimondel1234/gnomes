import { call } from "redux-saga/effects";
import { watchAuth } from "./authSaga";

export function* rootSaga() {
  yield call(watchAuth);
}
