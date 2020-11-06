import { gnomeReducer } from "../../reducers/gnomeReducer";
import { types } from "../../types/types";
import { gnomesMock } from "../../__mocks__/gnomesMock";

describe("Gnome Reducer Test", () => {
  const initState = {
    scrollNumberGnomes: 0,
    loading: false,
    gnomeSearched: {},
  };
  test("it must return the default value ", () => {
    const state = gnomeReducer(initState, {});
    expect(state).toEqual(initState);
  });
  test("it must add the gnome list", () => {
    const actionLogin = {
      type: types.addGnomes,
      gnomes: gnomesMock,
    };
    const state = gnomeReducer(initState, actionLogin);
    expect(state.gnomes).toEqual(gnomesMock);
    expect(state.scrollNumberGnomes).toEqual(2);
  });
  test("it must set the value of loading", () => {
    const actionLogin = {
      type: types.setLoading,
      loading: true,
    };
    const state = gnomeReducer(initState, actionLogin);
    expect(state.loading).toEqual(true);
  });
  test("it must set the gnome searched", () => {
    const actionLogin = {
      type: types.setGnomeSearched,
      gnomeSearched: gnomesMock[1],
    };
    const state = gnomeReducer(initState, actionLogin);
    expect(state.gnomeSearched).toEqual(gnomesMock[1]);
  });
  test("it must reset the information of gnomes", () => {
    const modifiedState = {
      scrollNumberGnomes: 0,
      loading: false,
      gnomeSearched: gnomesMock[0],
      gnomes: gnomesMock,
    };
    const actionLogin = {
      type: types.cleanGnomes,
    };
    const state = gnomeReducer(modifiedState, actionLogin);
    expect(state).toEqual(initState);
  });
});
