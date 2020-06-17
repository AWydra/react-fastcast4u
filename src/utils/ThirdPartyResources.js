import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';
import generalServices from 'services/general';
import detectInteraction from 'utils/detectInteraction';

import ReactGA, { initializeAnalytics } from 'utils/analytics';
import { hotjar } from 'react-hotjar';
import reCaptcha from 'utils/reCaptcha';
import tawkto from 'utils/tawkto';
import history from 'utils/history';

const ThirdPartyResources = () => {
  const interacted = useSelector(state => state.general.interacted);
  const dispatch = useDispatch();

  useEffect(() => {
    if (interacted) {
      // hotjar
      hotjar.initialize(95081, 6);

      // reCaptcha
      reCaptcha.init();

      // analytics
      initializeAnalytics();
      ReactGA.pageview(window.location.pathname);

      history.listen(location => {
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
      });

      // Tawk.to
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
  }, [dispatch, interacted]);

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

  return <span />;
};

export default ThirdPartyResources;
