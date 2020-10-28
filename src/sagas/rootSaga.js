import { call } from "redux-saga/effects";
import { watchAuth } from "./authSaga";
import { watchGnome } from "./gnomeSaga";

export function* rootSaga() {
  yield call(watchAuth);
}
