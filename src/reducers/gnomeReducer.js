import { types } from '../types/types';

const initialState = {
  scrollNumberGnomes: 0,
  loading: false,
  gnomeSearched: {},
};

/* 
  Gnome Reducer
*/
export const gnomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addGnomes:
      return {
        ...state,
        gnomes: action.gnomes,
        scrollNumberGnomes: action.gnomes.length,
      };
    case types.setLoading:
      return {
        ...state,
        loading: action.loading,
      };
    case types.setGnomeSearched:
      return {
        ...state,
        gnomeSearched: action.gnomeSearched,
      };
    case types.cleanGnomes:
      return initialState;

    default:
      return state;
  }
};
