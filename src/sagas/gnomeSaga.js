import { call, put, take, select, delay } from "redux-saga/effects";
import { API } from "../api/API";
import { types } from "../types/types";
import { addGnomes, setLoading } from "../actions/gnome";

const getScrollNumberGnomes = (state) => state.gnome;

export function* loadGnomesSaga() {
  const { scrollNumberGnomes } = yield select(getScrollNumberGnomes);
  yield put(setLoading(true));
  yield delay(700);
  const gnomes = yield call(API.getGnomes, scrollNumberGnomes + 30);
  yield put(setLoading(false));
  yield put(addGnomes(gnomes));
}

export function* watchGnome() {
  while (true) {
    yield take(types.loadGnomes);
    yield call(loadGnomesSaga);
  }
}
