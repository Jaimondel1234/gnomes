import { call, put, take } from "redux-saga/effects";
import { types } from "../types/types";
import { setGnomeSearched } from "../actions/gnome";
import { getGnomeByName, getGenreByHairColor } from "../helpers/helpers";

export function* searchGnome(gnomeName) {
  try {
    const gnome = yield call(getGnomeByName, gnomeName);
    const gnomeGenre = getGenreByHairColor(gnome[0].hair_color);
    yield put(setGnomeSearched({ ...gnome[0], genre: gnomeGenre }));
  } catch (e) {
    Swal.fire("Error", "Error in search for gnome", "error");
    console.log("e");
  }
}

export function* watchSearchGnome() {
  while (true) {
    const { gnomeName } = yield take(types.startGnomeSearch);
    yield call(searchGnome, gnomeName);
  }
}
