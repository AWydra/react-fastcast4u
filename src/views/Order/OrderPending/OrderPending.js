import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import { withCookies, Cookies } from 'react-cookie';
import orderServices from 'services/order';
import OrderAccessController from 'utils/OrderAccessController';

const OrderPending = ({ cookies }) => {
  const [status, setStatus] = useState('checking');
  const [url, setURL] = useState('checking');
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    switch (status) {
      case 'checking':
        interval = setInterval(async () => {
          await orderServices.checkFinalCompatibility();
          clearInterval(interval);
          setStatus('creating');
        }, 5000);
        break;
      case 'creating':
        interval = setInterval(async () => {
          // Reset store
          dispatch(orderActions.resetStore());
          cookies.remove('Fc4uOrder_Session', {
            path: '/',
          });
          const response = await orderServices.isReady();
          clearInterval(interval);
          setURL(response.data.url);
        }, 5000);
        break;
      case 'initializing':
        interval = setInterval(async () => {
          const redirectURL = await orderServices.getLoginURL(url);
          clearInterval(interval);
          window.location = redirectURL;
        }, 5000);
        break;
      default:
        return setStatus('checking');
    }

    return () => {
      orderServices.cancel();
      clearInterval(interval);
    };
  }, [status, url, cookies, dispatch]);

  return (
    <>
      <OrderAccessController currentStep={6} />
      <h1 style={{ textAlign: 'center' }}>Please wait</h1>
      <h2 style={{ textAlign: 'center' }}>Status: {status}...</h2>
      <h2 style={{ textAlign: 'center' }}>
        We are processing the payment and setting your server. This may take up to a few minutes
      </h2>
    </>
  );
};

OrderPending.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withCookies(OrderPending);
