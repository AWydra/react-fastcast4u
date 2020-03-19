import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/atoms/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Stepper from 'components/organisms/Stepper/Stepper';
import LoginForm from 'components/organisms/OrderForms/LoginForm/LoginForm';
import LoadingCover from 'components/molecules/LoadingCover/LoadingCover';

const OrderLogin = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [loading, setLoading] = useState(false);

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
        {loading && <LoadingCover />}
        <BoxTitle variant="h5" component="h1" mb={2}>
          Create Account or Sign In
        </BoxTitle>
        <LoginForm setLoading={setLoading} />
      </ColumnForm>
    </FullContainer>
  );
};

export default OrderLogin;
