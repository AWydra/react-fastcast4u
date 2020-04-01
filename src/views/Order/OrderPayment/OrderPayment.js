import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import orderServices from 'services/order';

import styled from 'styled-components';
import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/atoms/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Stepper from 'components/organisms/Stepper/Stepper';
import OrderAccessController from 'utils/OrderAccessController';
import generatePayment from 'utils/paymentGenerator';
import { useAlert } from 'utils/customHooks';

const useStyles = makeStyles(theme => ({
  button: {
    width: 200,
    margin: theme.spacing(1.5, 0),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    fontWeight: 600,
  },
}));

const ButtonContainer = styled.div`
  padding: 8px 0 32px;
`;

const OrderPayment = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClick = async method => {
    try {
      setLoading(true);
      const { data } = await orderServices.setPaymentMethod(method);

      if (data.invoice.status === 'error') throw Error(data.invoice.message);
      if (data.invoice.total === '0.00') return setRedirect(true);
      generatePayment(method, data);
    } catch (err) {
      alert.error(err.message);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <FullContainer center centerX>
      <OrderAccessController currentStep={3} />
      {redirect && <Redirect to="/order/details" />}
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
        <ButtonContainer>
          <Button className={classes.button} variant="contained" size="large" color="secondary">
            Debit / Credit Card
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            onClick={() => handleClick('paypal')}
          >
            PayPal
          </Button>
        </ButtonContainer>
        <Button component={Link} to="/order/login" variant="contained" color="primary">
          Back
        </Button>
      </ColumnForm>
    </FullContainer>
  );
};

export default OrderPayment;
