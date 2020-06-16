// @ts-nocheck
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';
import generalServices from 'services/general';

import { CssBaseline, NoSsr, Box } from '@material-ui/core/';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from 'theme/GlobalStyle';
import Alert from 'components/atoms/Alert/Alert';
import Header from 'components/organisms/Header/Header';
import PageNavigation from 'components/organisms/PageNavigation/PageNavigation';
import Footer from 'components/organisms/Footer/Footer';
import MainThemeProvider from 'theme/MainThemeProvider';
import detectInteraction from 'utils/detectInteraction';
import ErrorHandler from './ErrorHandler';

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCountryCode = async () => {
      const code = await generalServices.getCountryCode();
      dispatch(generalActions.setCountry(code));
    };

    getCountryCode();
  }, [dispatch]);

  useEffect(() => {
    detectInteraction(() => dispatch(generalActions.setInteracted()));
  }, [dispatch]);

  return (
    <ErrorHandler>
      <NoSsr>
        <MainThemeProvider>
          <StylesProvider injectFirst>
            <CssBaseline />
            <GlobalStyle />
            <Alert />
            <Header />
            <Box mb={8}>{children}</Box>
            <PageNavigation />
            <Footer />
          </StylesProvider>
        </MainThemeProvider>
      </NoSsr>
    </ErrorHandler>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
