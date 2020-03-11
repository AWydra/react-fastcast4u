import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/atoms/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Stepper from 'components/organisms/Stepper/Stepper';
import LoginForm from 'components/organisms/OrderForms/LoginForm/LoginForm';

const OrderLogin = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <FullContainer center centerX>
      {matches && (
        <Stepper
          steps={['Create your Server Package', 'Create Account', 'Payment & Setup']}
          activeStep={1}
          mb={6}
        />
      )}
      <ColumnForm onSubmit={() => console.log('Form sent')}>
        <BoxTitle variant="h5" component="h1" mb={2}>
          Create Account or Sign In
        </BoxTitle>
        <LoginForm />
      </ColumnForm>
    </FullContainer>
  );
};

export default OrderLogin;
