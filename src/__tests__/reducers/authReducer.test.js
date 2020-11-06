import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Auth Reducer Test', () => {
  const initState = {};
  test('it must return the default value ', () => {
    const state = authReducer(initState, {});
    expect(state).toEqual(initState);
  });
  test('it must log in to user', () => {
    const actionLogin = {
      type: types.login,
      displayName: 'Fernando',
      uid: '1233443',
    };
    const stateLogin = authReducer(initState, actionLogin);
    expect(stateLogin).toEqual({ uid: '1233443', name: 'Fernando' });
  });
  test('it must log out', () => {
    const initState = { uid: '1233443', name: 'Fernando' };
    const actionLogin = {
      type: types.logout,
    };
    const stateLogin = authReducer(initState, actionLogin);
    expect(stateLogin).toEqual({});
  });
});
