import { call, put, take, select, delay } from "redux-saga/effects";
import { types } from "../types/types";
import { addGnomes, setLoading } from "../actions/gnome";
import { getGnomesByNumber } from "../helpers/helpers";

const getScrollNumberGnomes = (state) => state.gnome;

export function* loadGnomesSaga() {
  const { scrollNumberGnomes } = yield select(getScrollNumberGnomes);
  yield put(setLoading(true));
  yield delay(700);
  const gnomes = yield call(getGnomesByNumber, scrollNumberGnomes + 30);
  yield put(setLoading(false));
  yield put(addGnomes(gnomes));
}

export function* watchGnome() {
  while (true) {
    yield take(types.loadGnomes);
    yield call(loadGnomesSaga);
  }
}
