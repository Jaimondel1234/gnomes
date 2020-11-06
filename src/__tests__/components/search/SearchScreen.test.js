import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GnomeScreen } from "../../../components/GnomeList/GnomeScreen";
import { theme } from "../../../themes/theme";
import { types } from "../../../types/types";
import { SearchScreen } from "../../../components/search/SearchScreen";
import { gnomesMock } from "../../../__mocks__/gnomesMock";

describe("Test <SearchScreen/>", () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initState = {
    gnome: { gnomeSearched: gnomesMock[0] },
  };

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SearchScreen />
      </ThemeProvider>
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("if there is a search for a gnome, the gnome information must be displayed", () => {
    expect(wrapper.find("GnomeInformation").props("props")).toEqual(
      gnomesMock[0]
    );
  });
});
