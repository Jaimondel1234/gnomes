import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../themes/theme';
import { GnomeCard } from '../../../components/GnomeList/GnomeCard';
import { MemoryRouter, Router } from 'react-router-dom';
import { gnomesMock } from '../../../__mocks__/gnomesMock';

describe('Test <GnomeCard/>', () => {
  const history = {
    push: jest.fn(),
    location: { state: {} },
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  const props = gnomesMock[0];
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Router history={history}>
          <GnomeCard props={props} />
        </Router>
      </MemoryRouter>
    </ThemeProvider>,
  );
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('if you click on the button more you must make a redirection with the information of the gnome', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenCalledWith('/gnome-detail', { props });
  });
});
