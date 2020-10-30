import { types } from "../types/types";

export const addGnomes = (gnomes) => ({
  type: types.addGnomes,
  gnomes,
});

export const loadGnomes = () => ({
  type: types.loadGnomes,
});

export const setLoading = (loading) => ({
  type: types.setLoading,
  loading,
});

export const setGnomeSearched = (gnomeSearched) => ({
  type: types.setGnomeSearched,
  gnomeSearched,
});

export const startGnomeSearch = (gnomeName) => ({
  type: types.startGnomeSearch,
  gnomeName,
});
