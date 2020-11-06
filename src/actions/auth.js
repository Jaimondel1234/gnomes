import { types } from '../types/types';

/*
  Auth actions
*/
export const login = (uid, displayName) => ({
  type: types.login,
  displayName,
  uid,
});

export const logout = () => ({
  type: types.logout,
});

export const loginRequest = (email, password) => ({
  type: types.loginRequest,
  email,
  password,
});
