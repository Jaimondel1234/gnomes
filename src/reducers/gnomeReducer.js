import { types } from "../types/types";

export const gnomeReducer = (
  state = { scrollNumberGnomes: 0, loading: false, gnomeSearched: {} },
  action
) => {
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

    default:
      return state;
  }
};
