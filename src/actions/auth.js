import { types } from "../types/types";

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
