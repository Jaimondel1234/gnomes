import { types } from '../types/types';

/* 
  Auth Reducer
*/
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.uid,
        name: action.displayName,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
