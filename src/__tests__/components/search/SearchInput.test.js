import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../themes/theme";
import { types } from "../../../types/types";

import { SearchInput } from "../../../components/search/SearchInput";

describe("Test <SearchInput/>", () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initState = {};

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SearchInput />
      </ThemeProvider>
    </Provider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("if the enter key is pressed, it will trigger the gnome search action ", () => {
    wrapper.find("input").prop("onKeyPress")({ key: "Enter" });
    expect(store.dispatch).toHaveBeenCalledWith({
      type: types.startGnomeSearch,
      gnomeName: "",
    });
  });
});
