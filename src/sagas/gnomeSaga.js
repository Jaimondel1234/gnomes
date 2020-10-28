import { call, put, take, select } from "redux-saga/effects";

import { API } from "../api/API";
import { types } from "../types/types";
import { addGnomes } from "../actions/gnome";

const getScrollNumberGnomes = (state) => state.gnome;

export function* loadGnomesSaga() {
  const { scrollNumberGnomes } = yield select(getScrollNumberGnomes);
  const gnomes = yield call(API.getGnomes, scrollNumberGnomes + 10);
  yield put(addGnomes(gnomes));
}

export function* watchGnome() {
  while (true) {
    yield take(types.loadGnomes);
    yield call(loadGnomesSaga);
  }
}
