import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import { withCookies, Cookies } from 'react-cookie';
import orderServices from 'services/order';

import { Chip, CircularProgress, makeStyles } from '@material-ui/core';
import ColumnForm from 'components/atoms/ColumnForm/ColumnForm';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Text from 'components/atoms/Text/Text';
import OrderAccessController from 'utils/OrderAccessController';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 5),
    },
  },
  chip: {
    fontSize: '20px',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const messages = {
  checking: 'Checking data validation',
  creating: 'Creating account',
  initializing: 'Preparing account',
};

const OrderPending = ({ cookies }) => {
  const [status, setStatus] = useState('checking');
  const [url, setURL] = useState('checking');
  const dispatch = useDispatch();
  const classes = useStyles();

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
      <FullContainer center>
        <ColumnForm className={classes.paper}>
          <BoxTitle variant="h4" component="h1" mb={3}>
            Please Wait
          </BoxTitle>
          <CircularProgress />
          <Text className={classes.status} component="h2" variant="h5" my={3}>
            <Chip className={classes.chip} label={messages[status]} color="primary" />
          </Text>
          <Text textAlign="center">
            We are processing the payment and setting your server. This may take up to a few minutes
          </Text>
        </ColumnForm>
      </FullContainer>
    </>
  );
};

OrderPending.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withCookies(OrderPending);
