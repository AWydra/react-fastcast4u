import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Button, makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/atoms/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Stepper from 'components/organisms/Stepper/Stepper';
import OrderAccessController from 'utils/OrderAccessController';

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
      <ColumnForm>
        <BoxTitle variant="h5" component="h1" mb={2}>
          Payment Checkout
        </BoxTitle>
        <ButtonContainer>
          <Button
            className={`${classes.button}`}
            variant="contained"
            size="large"
            color="secondary"
          >
            Debit / Credit Card
          </Button>
          <Button className={`${classes.button}`} variant="contained" size="large" color="primary">
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
