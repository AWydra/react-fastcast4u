import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';
import generalServices from 'services/general';
import detectInteraction from 'utils/detectInteraction';

import history from 'utils/history';

const ThirdPartyResources = () => {
  const interacted = useSelector(state => state.general.interacted);
  const dispatch = useDispatch();

  useEffect(() => {
    if (interacted) {
      // OneSignal
      import('utils/onesignal').then(onesignal => {
        onesignal.default.init();
      });

      // hotjar
      import('react-hotjar').then(({ hotjar }) => {
        hotjar.initialize(95081, 6);
      });

      // reCaptcha
      import('utils/reCaptcha').then(reCaptcha => {
        reCaptcha.default.init();
      });

      // analytics
      import('utils/analytics').then(ReactGA => {
        ReactGA.default.pageview(window.location.pathname);

        history.listen(location => {
          ReactGA.default.set({ page: location.pathname }); // Update the user's current page
          ReactGA.default.pageview(location.pathname); // Record a pageview for the given page
        });
      });

      // Tawk.to
      import('utils/tawkto').then(tawkto => {
        tawkto.default.init(
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
      });
    }
  }, [dispatch, interacted]);

  useEffect(() => {
    detectInteraction(() => dispatch(generalActions.setInteracted()));
  }, [dispatch]);

  useEffect(() => {
    const getInitialData = async () => {
      const code = await generalServices.getInitialData();
      dispatch(generalActions.setInitialData(code));
    };

    getInitialData();
  }, [dispatch]);

  return <span />;
};

export default ThirdPartyResources;
