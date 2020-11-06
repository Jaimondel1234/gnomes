import { gnomesMock } from "../../__mocks__/gnomesMock";
import { types } from "../../types/types";
import {
  addGnomes,
  loadGnomes,
  setLoading,
  setGnomeSearched,
  startGnomeSearch,
  cleanGnomes,
} from "../../actions/gnome";

describe("Gnome actions test", () => {
  test("add gnomes action must be correct", () => {
    expect(addGnomes(gnomesMock)).toEqual({
      type: types.addGnomes,
      gnomes: gnomesMock,
    });
  });
  test("load gnomes action must be correct", () => {
    expect(loadGnomes()).toEqual({
      type: types.loadGnomes,
    });
  });
  test("set loading action must be correct", () => {
    expect(setLoading(true)).toEqual({
      type: types.setLoading,
      loading: true,
    });
  });
  test("set gnome searched action  must be correct", () => {
    expect(setGnomeSearched(gnomesMock[1])).toEqual({
      type: types.setGnomeSearched,
      gnomeSearched: gnomesMock[1],
    });
  });
  test("start gnome search action  must be correct", () => {
    expect(startGnomeSearch("titus")).toEqual({
      type: types.startGnomeSearch,
      gnomeName: "titus",
    });
  });
  test("clean gnomes action must be correct", () => {
    expect(cleanGnomes()).toEqual({
      type: types.cleanGnomes,
    });
  });
});
