import { call, all, spawn } from 'redux-saga/effects';
import { watchAuth } from './authSaga';
import { watchGnome } from './gnomeSaga';
import { watchSearchGnome } from './searchGnomeSaga';
import map from 'lodash/map';

/* 
 Root Saga
*/

export function* rootSaga() {
  const sagas = [watchAuth, watchGnome, watchSearchGnome];

  yield all(
    map(sagas, (saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
