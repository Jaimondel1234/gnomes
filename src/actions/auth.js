import { types } from "../types/types";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    displayName,
    uid,
  },
});

export const logout = () => ({
  type: types.logout,
});
