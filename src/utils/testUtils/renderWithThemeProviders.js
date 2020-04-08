import React from 'react';
import { render } from '@testing-library/react';
import MainThemeProvider from 'theme/MainThemeProvider';
import { Provider } from 'react-redux';
import { store } from '../../store';

const renderWithThemeProviders = (ui, { ...renderOptions } = {}) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <MainThemeProvider>{children}</MainThemeProvider>
      </Provider>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithThemeProviders;
