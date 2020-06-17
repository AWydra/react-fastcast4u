// @ts-nocheck
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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
import ErrorHandler from 'templates/ErrorHandler';

import ReactGA, { initializeAnalytics } from 'utils/analytics';
import { hotjar } from 'react-hotjar';
import reCaptcha from 'utils/reCaptcha';
import tawkto from 'utils/tawkto';
import history from 'utils/history';

const MainTemplate = ({ children }) => {
  const interacted = useSelector(state => state.general.interacted);
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

  useEffect(() => {
    if (interacted) {
      hotjar.initialize(95081, 6);
      reCaptcha.init();
      initializeAnalytics();
      ReactGA.pageview(window.location.pathname);

      history.listen(location => {
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
      });

      tawkto.init(
        '55fb4794e1ea4c1012fe49df',
        tawk => {
          return dispatch(generalActions.setChat(tawk));
        },
        [
          {
            ev: 'onChatMinimized',
            fn: () => {
              dispatch(generalActions.setChatDisplay(false));
            },
          },
          {
            ev: 'onChatMaximized',
            fn: () => {
              dispatch(generalActions.setChatDisplay(true));
            },
          },
          {
            ev: 'onStatusChange',
            fn: status => {
              dispatch(generalActions.setChatStatus(status === 'online'));
            },
          },
        ],
      );
    }
  }, [interacted]);

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
