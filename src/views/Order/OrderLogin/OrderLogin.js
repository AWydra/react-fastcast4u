/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, lazy, Suspense } from 'react';

import { Link, CircularProgress, useMediaQuery, useTheme } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/molecules/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Text from 'components/atoms/Text/Text';
import Stepper from 'components/organisms/Stepper/Stepper';
import LoginForm from 'components/organisms/Forms/OrderLoginForm/OrderLoginForm';
import OrderAccessController from 'utils/OrderAccessController';

const TosModal = lazy(() => import('components/organisms/Modals/TosModal'));

const OrderLogin = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <FullContainer center centerX>
      <OrderAccessController currentStep={2} />
      {matches && (
        <Stepper
          steps={['Create your Server Package', 'Create Account', 'Payment & Setup']}
          activeStep={1}
          mb={6}
        />
      )}
      <ColumnForm loading={loading}>
        <BoxTitle variant="h5" component="h1" mb={2}>
          Create Account or Sign In
        </BoxTitle>
        <LoginForm setLoading={setLoading} />
        <Text component="p" variant="caption" align="center" mt={2.5}>
          By clicking the ‘Continue’ button you accept the{' '}
          <Link component="button" onClick={() => setOpen(true)}>
            Terms Of Service
          </Link>
        </Text>
      </ColumnForm>
      <Suspense fallback={<CircularProgress style={{ marginTop: 32 }} />}>
        {open && <TosModal open={open} onClose={() => setOpen(false)} />}
      </Suspense>
    </FullContainer>
  );
};

export default OrderLogin;
