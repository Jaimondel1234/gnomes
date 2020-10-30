import { types } from "../types/types";

export const gnomeReducer = (
  state = { scrollNumberGnomes: 0, loading: false },
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

    default:
      return state;
  }
};
