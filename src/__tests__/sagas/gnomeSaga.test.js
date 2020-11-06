import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { watchGnome, loadGnomesSaga } from '../../sagas/gnomeSaga';
import { types } from '../../types/types';
import { getGnomesByNumber, getListWithGenres } from '../../helpers/helpers';
import { put, delay, call } from 'redux-saga/effects';
import { setLoading, addGnomes } from '../../actions/gnome';
import { throwError } from 'redux-saga-test-plan/providers';
import Swal from 'sweetalert2';

describe('Gnome Saga Test', () => {
  test('watcher load gnomes test', (done) => {
    return expectSaga(watchGnome)
      .provide([[matchers.call.fn(loadGnomesSaga), null]])
      .dispatch(types.loadGnomes)
      .call(loadGnomesSaga)
      .run()
      .then(done());
  });
  test('loadGnomes saga', () => {
    const initialState = {
      gnome: { scrollNumberGnomes: 10 },
    };
    return expectSaga(loadGnomesSaga)
      .withState(initialState)
      .provide([
        [matchers.call.fn(getGnomesByNumber), {}],
        [delay(700), {}],
      ])
      .run()
      .then((result) => {
        const { effects } = result;

        expect(effects.call[0]).toEqual(delay(700));
        expect(effects.call[1]).toEqual(call(getGnomesByNumber, 40));

        expect(effects.put[0]).toEqual(put(setLoading(true)));
        expect(effects.put[1]).toEqual(put(setLoading(false)));
        expect(effects.put[2]).toEqual(put(addGnomes(getListWithGenres({}))));
      });
  });
  test('load gnomes saga if there is an error', () => {
    const spy = jest.spyOn(Swal, 'fire');
    const initialState = {
      gnome: { scrollNumberGnomes: 10 },
    };
    const error = new Error('error');
    return expectSaga(loadGnomesSaga)
      .withState(initialState)
      .provide([
        [matchers.call.fn(getGnomesByNumber), throwError(error)],
        [delay(700), {}],
      ])
      .run()
      .then(() => {
        expect(spy).toHaveBeenCalledWith(
          'Error',
          'No gnomes can be loaded ',
          'error',
        );
      });
  });
});
