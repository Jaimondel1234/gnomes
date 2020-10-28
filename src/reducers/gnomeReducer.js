import { types } from "../types/types";

export const gnomeReducer = (state = { scrollNumberGnomes: 0 }, action) => {
  switch (action.type) {
    case types.addGnomes:
      return {
        ...state,
        gnomes: action.gnomes,
        scrollNumberGnomes: action.gnomes.length,
      };

    default:
      return state;
  }
};
