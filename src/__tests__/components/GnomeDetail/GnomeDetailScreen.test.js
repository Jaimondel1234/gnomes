import React from "react";
import { GnomeDetailScreen } from "../../../components/GnomeDetail/GnomeDetailScreen";
import { mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../themes/theme";
import { MemoryRouter, Router } from "react-router-dom";
import { gnomesMock } from "../../../__mocks__/gnomesMock";

describe("Test de <GnomeDetailScreen/>", () => {
  const history = {
    location: { state: gnomesMock[0] },
    listen: jest.fn(),
  };

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Router history={history}>
          <GnomeDetailScreen />
        </Router>
      </MemoryRouter>
    </ThemeProvider>
  );
  test("it must be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("it must show the information of the gnomes with the data obtained from the redirection", () => {
    expect(wrapper.find("GnomeInformation").props("props")).toEqual(
      history.location.state
    );
  });
});
