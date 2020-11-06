import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GnomeScreen } from "../../../components/GnomeList/GnomeScreen";
import { theme } from "../../../themes/theme";
import { types } from "../../../types/types";

describe("Test <GnomeScreen/>", () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initState = {
    gnome: { scrollNumberGnomes: 0 },
    auth: {
      uid: "124",
      name: "test",
    },
  };

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GnomeScreen />
      </ThemeProvider>
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("if the number of gnomes is zero and the user is authenticated, new gnomes will be loaded", () => {
    expect(store.dispatch).toHaveBeenCalledWith({
      type: types.loadGnomes,
    });
  });
});
