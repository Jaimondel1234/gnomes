import { call, all } from "redux-saga/effects";
import { watchAuth } from "./authSaga";
import { watchGnome } from "./gnomeSaga";
import { watchSearchGnome } from "./searchGnomeSaga";

export function* rootSaga() {
  yield all([call(watchAuth), call(watchGnome), call(watchSearchGnome)]);
}
