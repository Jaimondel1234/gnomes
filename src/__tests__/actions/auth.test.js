import { expectSaga } from 'redux-saga-test-plan';
import { types } from '../../types/types';
import { loginRequest, login, logout } from '../../actions/auth';

describe('Auth actions test', () => {
  test('login action must be correct', () => {
    expect(login('124', 'fer')).toEqual({
      type: types.login,
      displayName: 'fer',
      uid: '124',
    });
  });
  test('logout action must be correct', () => {
    expect(logout()).toEqual({
      type: types.logout,
    });
  });
  test('login request action must be correct', () => {
    expect(loginRequest('j@gmail.com', '124')).toEqual({
      type: types.loginRequest,
      email: 'j@gmail.com',
      password: '124',
    });
  });
});
