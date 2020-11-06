import { call, put, take, select, delay } from 'redux-saga/effects';
import { types } from '../types/types';
import { addGnomes, setLoading } from '../actions/gnome';
import { getGnomesByNumber, getListWithGenres } from '../helpers/helpers';
import Swal from 'sweetalert2';

/* 
  Load Gnome Saga
*/

const getScrollNumberGnomes = (state) => state.gnome;

export function* loadGnomesSaga() {
  try {
    const { scrollNumberGnomes } = yield select(getScrollNumberGnomes);
    yield put(setLoading(true));
    yield delay(700);
    const gnomes = yield call(getGnomesByNumber, scrollNumberGnomes + 30);
    yield put(setLoading(false));
    yield put(addGnomes(getListWithGenres(gnomes)));
  } catch (e) {
    Swal.fire('Error', 'No gnomes can be loaded ', 'error');
    // console.log(e);
  }
}

export function* watchGnome() {
  while (true) {
    yield take(types.loadGnomes);
    yield call(loadGnomesSaga);
  }
}
