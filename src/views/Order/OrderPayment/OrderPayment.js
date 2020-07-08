import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import orderServices from 'services/order';

import { Box, Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import Image from 'components/atoms/Image/Image';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import PaymentButton from 'components/atoms/PaymentButton/PaymentButton';
import SecureMessage from 'components/atoms/SecureMessage/SecureMessage';
import ColumnForm from 'components/molecules/ColumnForm/ColumnForm';
import Stepper from 'components/organisms/Stepper/Stepper';
import OrderAccessController from 'utils/OrderAccessController';
import generatePayment from 'utils/paymentGenerator';
import { useAlert } from 'utils/customHooks';
import history from 'utils/history';
import { modeSwitch } from 'utils/theme';

import VisaIcon from 'assets/svg/VisaIcon';
import MastercardIcon from 'assets/svg/MastercardIcon';
import PaypalIcon from 'assets/svg/PaypalIcon';
import idealLogo from 'assets/img/idealLogo.png';
import pscLogo from 'assets/img/pscLogo.png';

const useStyles = makeStyles(theme => ({
  paymethod: {
    marginLeft: theme.spacing(0.5),
    backgroundColor: modeSwitch('transparent', theme.palette.common.white),
    borderRadius: theme.shape.borderRadius,
  },
  icon: {
    width: theme.spacing(6),
    padding: theme.spacing(0, 0.5),
    border: 'solid 1px',
    borderColor: theme.palette.grey[300],
  },
  paypal: {
    width: theme.spacing(3),
    height: theme.spacing(3.5),
    padding: theme.spacing(0.5),
  },
  image: {
    height: theme.spacing(3),
    padding: theme.spacing(0.5),
    '& img': {
      height: '100%',
    },
  },
}));

const OrderPayment = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const alert = useAlert();
  const [loading, setLoading] = useState(false);

  const handleClick = async method => {
    try {
      setLoading(true);
      const { data } = await orderServices.setPaymentMethod(method);
      if (data.invoice.status === 'error') throw Error(data.invoice.message);
      if (data.invoice.total === '0.00') return history.push('/order/details');
      generatePayment(data.payment);
    } catch (err) {
      alert.error(err.response.data.errorMessage || err.message);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <FullContainer center centerX>
      <OrderAccessController currentStep={3} />
      {matches && (
        <Stepper
          steps={['Create your Server Package', 'Create Account', 'Payment & Setup']}
          activeStep={2}
          mb={6}
        />
      )}
      <ColumnForm loading={loading}>
        <BoxTitle variant="h5" component="h1" mb={2}>
          Payment Checkout
        </BoxTitle>
        <SecureMessage />
        <Box mb={4}>
          <PaymentButton onClick={() => handleClick('fasterpay')}>
            Debit / Credit Card
            <Box display="flex" alignItems="center" ml={1}>
              <VisaIcon className={`${classes.paymethod} ${classes.icon}`} />
              <MastercardIcon className={`${classes.paymethod} ${classes.icon}`} />
            </Box>
          </PaymentButton>
          <PaymentButton onClick={() => handleClick('paypal')}>
            PayPal
            <Box display="flex" alignItems="center" ml={1}>
              <PaypalIcon className={`${classes.paymethod} ${classes.paypal}`} />
            </Box>
          </PaymentButton>
          <PaymentButton onClick={() => handleClick('paymentwall')}>
            +120 methods
            <Box display="flex" alignItems="center" ml={1}>
              <Box className={`${classes.paymethod} ${classes.image}`}>
                <Image src={idealLogo} />
              </Box>
              <Box className={`${classes.paymethod} ${classes.image}`}>
                <Image src={pscLogo} />
              </Box>
            </Box>
          </PaymentButton>
        </Box>
        <Button component={Link} to="/order/login" variant="contained" color="primary">
          Back
        </Button>
      </ColumnForm>
    </FullContainer>
  );
};

export default OrderPayment;
