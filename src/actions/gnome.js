import { types } from "../types/types";

export const addGnomes = (gnomes) => ({
  type: types.addGnomes,
  gnomes,
});

export const loadGnomes = () => ({
  type: types.loadGnomes,
});
