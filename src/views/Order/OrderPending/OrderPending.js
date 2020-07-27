import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import { withCookies, Cookies } from 'react-cookie';
import orderServices from 'services/order';

import { Chip, CircularProgress, makeStyles } from '@material-ui/core';
import ColumnForm from 'components/molecules/ColumnForm/ColumnForm';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Text from 'components/atoms/Text/Text';
import OrderAccessController from 'utils/OrderAccessController';
import { isDev } from 'utils/nodeEnv';
import { useDidUpdate, useAlert } from 'utils/customHooks';

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
  text: {
    textAlign: 'center',
  },
}));

const OrderPending = ({ cookies }) => {
  const content = useSelector(state => state.language.orderPending);
  const [message, setMessage] = useState(content.checking);
  const [checking, setChecking] = useState(null);
  const [creating, setCreating] = useState(null);
  const [url, setURL] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const alert = useAlert();

  useEffect(() => {
    setChecking(true);

    return () => {
      orderServices.cancel();
    };
  }, []);

  useDidUpdate(() => {
    const interval = setInterval(async () => {
      try {
        await orderServices.checkFinalCompatibility();
        clearInterval(interval);
        setCreating(true);
        setMessage(content.creating);
      } catch (error) {
        return null;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [checking]);

  useDidUpdate(() => {
    const interval = setInterval(async () => {
      try {
        const response = await orderServices.isReady();

        // Prevent reset store in development mode
        if (!isDev()) {
          dispatch(orderActions.resetStore());
          cookies.remove('Fc4uOrder_Session', {
            path: '/',
          });
        }

        setMessage(content.initializing);
        clearInterval(interval);
        setURL(response.data.url);
      } catch (error) {
        return null;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [creating]);

  useDidUpdate(() => {
    const interval = setInterval(async () => {
      try {
        const redirectURL = await orderServices.getLoginURL(url);
        clearInterval(interval);
        window.location = redirectURL;
      } catch (error) {
        if (!error.__CANCEL__) {
          alert.error(error.response.data.error || error.message);
        }
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [url]);

  return (
    <>
      <OrderAccessController currentStep={5} />
      <FullContainer center>
        <ColumnForm className={classes.paper}>
          <BoxTitle variant="h4" component="h1" mb={3}>
            {content.wait}
          </BoxTitle>
          <CircularProgress />
          <Text className={classes.status} component="h2" variant="h5" my={3}>
            <Chip className={classes.chip} label={message} color="primary" />
          </Text>
          <Text className={classes.text}>{content.processing}</Text>
        </ColumnForm>
      </FullContainer>
    </>
  );
};

OrderPending.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withCookies(OrderPending);
