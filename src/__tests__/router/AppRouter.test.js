import React from "react";

import { AppRouter } from "../../router/AppRouter";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";
import { types } from "../../types/types";

const user = { uid: 23344, displayName: "Fer" };
localStorage.setItem("user", JSON.stringify(user));

describe("Test <AppRouter/>", () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initState = {
    auth: {},
  };

  const store = mockStore(initState);
  store.dispatch = jest.fn();

  test("it must be displayed correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("if logged in, user information must be stored in redux", () => {
    expect(store.dispatch).toHaveBeenCalledWith({
      type: types.login,
      displayName: "Fer",
      uid: 23344,
    });
  });
});
