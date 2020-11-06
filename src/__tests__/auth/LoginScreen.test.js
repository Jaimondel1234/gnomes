import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { LoginScreen } from '../../auth/LoginScreen';
import { types } from '../../types/types';
import { theme } from '../../themes/theme';

describe('Test <LoginScreen/>', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initState = {};

  const store = mockStore(initState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </Provider>,
  );
  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('submitting the form, triggers the action to log', () => {
    wrapper.find('form').prop('onSubmit')({ preventDefault: () => {} });
    expect(store.dispatch).toHaveBeenCalledWith({
      type: types.loginRequest,
      email: 'heroe@gmail.com',
      password: 'heroe',
    });
  });
});
