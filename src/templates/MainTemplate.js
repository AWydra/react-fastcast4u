// @ts-nocheck
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import tawkto from 'react-tawkto';
import { CssBaseline, NoSsr, Box } from '@material-ui/core/';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/organisms/Header/Header';
import PageNavigation from 'components/organisms/PageNavigation/PageNavigation';
import Footer from 'components/organisms/Footer/Footer';
import MainThemeProvider from 'theme/MainThemeProvider';

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();

  // Tawk.to
  useEffect(() => {
    tawkto.init('55fb4794e1ea4c1012fe49df', tawk => dispatch(generalActions.setChat(tawk)));
  }, [dispatch]);

  return (
    <NoSsr>
      <MainThemeProvider>
        <StylesProvider injectFirst>
          <CssBaseline />
          <GlobalStyle />
          <Header />
          <Box mb={8}>{children}</Box>
          <PageNavigation />
          <Footer />
        </StylesProvider>
      </MainThemeProvider>
    </NoSsr>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
