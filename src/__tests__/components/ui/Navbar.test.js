import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../themes/theme';
import { Navbar } from '../../../components/ui/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Test <Navbar/>', () => {
  Storage.prototype.removeItem = jest.fn();
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initState = {};

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>,
  );
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('if the button is clicked, the logout action must be dispatched', () => {
    wrapper.find('button').prop('onClick')();
    expect(localStorage.removeItem).toHaveBeenCalledWith('user');
    expect(store.dispatch).toHaveBeenCalledWith({ type: types.logout });
  });
});
