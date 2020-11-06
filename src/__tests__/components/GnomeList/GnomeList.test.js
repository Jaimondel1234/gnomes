import React, { useRef } from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../themes/theme';
import { types } from '../../../types/types';
import { GnomeList } from '../../../components/GnomeList/GnomeList';
import { gnomesMock } from '../../../__mocks__/gnomesMock';

describe('Test <GnomeList/>', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initState = {
    gnome: { scrollNumberGnomes: 0, loading: true, gnomes: gnomesMock },
  };

  const store = mockStore(initState);
  store.dispatch = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GnomeList />
      </ThemeProvider>
    </Provider>,
  );

  test('it must be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('if new elements are being loaded, the placeholders of gnomes should be shown (loading = true)', () => {
    expect(wrapper.find('core__PlaceHolderStyle').exists()).toBe(true);
  });
  test('if the gnome list is not void, the cards of gnomes must be displayed', () => {
    expect(wrapper.find('GnomeCard').at(0).exists()).toBe(true);
  });
  //   test("if 75% of the scroll is reached ,new elements will be loaded", () => {
  //     expect(store.dispatch).toHaveBeenCalledWith({
  //       type: types.loadGnomes,
  //     });
  //   });
});
