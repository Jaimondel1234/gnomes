import React from 'react';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './themes/theme';
import { ThemeProvider } from 'styled-components';

const GnomeApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default GnomeApp;
