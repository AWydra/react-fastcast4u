import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/atoms/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Stepper from 'components/organisms/Stepper/Stepper';
import SetupForm from 'components/organisms/OrderForms/SetupForm/SetupForm';

const OrderDetails = () => {
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
      <ColumnForm>
        <BoxTitle variant="h5" component="h1" mb={2}>
          Account Details
        </BoxTitle>
        <SetupForm />
      </ColumnForm>
    </FullContainer>
  );
};

export default OrderDetails;
