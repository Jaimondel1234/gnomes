import { call, put } from 'redux-saga/effects';
import {
  loadingSaga,
  logoutSaga,
  startLoginEmailPassword,
  watchAuth,
} from '../../sagas/authSaga';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { cleanGnomes, loadGnomes } from '../../actions/gnome';
import { API } from '../../api/API';
import { login, loginRequest, logout } from '../../actions/auth';
import Swal from 'sweetalert2';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

describe('Auth Saga test', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    jest.clearAllMocks();
  });

  test('logout saga test', () => {
    testSaga(logoutSaga)
      .next()
      .call(loadingSaga)
      .next()
      .put(cleanGnomes())
      .next()
      .isDone();
  });
  test('test login with email and password saga if user exists', () => {
    const userFake = { uid: '234', displayName: 'Fer' };

    const sagaProvider = {
      call(effect, next) {
        if (effect.fn === API.authorizeMock) {
          return userFake;
        }
        if (effect.fn === loadingSaga) {
          return {};
        }
        return next();
      },
    };

    return expectSaga(startLoginEmailPassword, 'her@gmail.com', '1234')
      .provide(sagaProvider)
      .run()
      .then((result) => {
        const { effects } = result;

        expect(effects.call[0]).toEqual(
          call(API.authorizeMock, 'her@gmail.com', '1234'),
        );
        expect(effects.call[1]).toEqual(call(loadingSaga));

        expect(effects.put[0]).toEqual(put(login('234', 'Fer')));
        expect(effects.put[1]).toEqual(put(loadGnomes()));
      });
  });
  test("test login with email and password saga if user doesn't exist", () => {
    const spy = jest.spyOn(Swal, 'fire');
    const error = new Error('error');

    return expectSaga(startLoginEmailPassword, 'her@gmail.com', '1234')
      .provide([[matchers.call.fn(API.authorizeMock), throwError(error)]])
      .run()
      .then(() => {
        expect(spy).toHaveBeenCalledWith(
          'Error',
          'An error has occurred',
          'error',
        );
      });
  });
  test('test login with email and password saga, if there is an error', () => {
    const spy = jest.spyOn(Swal, 'fire');
    const error = new Error('error');

    return expectSaga(startLoginEmailPassword, 'her@gmail.com', '1234')
      .provide([[matchers.call.fn(API.authorizeMock), throwError(error)]])
      .run()
      .then(() => {
        expect(spy).toHaveBeenCalledWith(
          'Error',
          'An error has occurred',
          'error',
        );
      });
  });
  test('test loading saga', () => {
    const fireSwalSpy = jest.spyOn(Swal, 'fire');
    const closeSwalSpy = jest.spyOn(Swal, 'close');

    testSaga(loadingSaga).next().delay(900).next().isDone();

    expect(fireSwalSpy).toHaveBeenCalledWith({
      title: 'Uploading ...',
      allowOutsideClick: false,
      willOpen: expect.any(Function),
    });
    expect(closeSwalSpy).toHaveBeenCalled();
  });
  test('watcher auth test', (done) => {
    const sagaProvider = {
      call(effect, next) {
        if (effect.fn === startLoginEmailPassword) {
          return {};
        }
        if (effect.fn === logoutSaga) {
          return {};
        }
        return next();
      },
    };
    return expectSaga(watchAuth)
      .provide([sagaProvider])
      .dispatch(loginRequest('her@gmail.com', '1234'))
      .call(startLoginEmailPassword, 'her@gmail.com', '1234')
      .dispatch(logout())
      .call(logoutSaga)
      .run()
      .then(done());
  });
});
