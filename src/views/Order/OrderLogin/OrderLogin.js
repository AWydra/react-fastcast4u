/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

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
  const content = useSelector(state => state.language.orderLogin);
  const steps = useSelector(state => state.language.order.stepper);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <FullContainer center centerX>
      <OrderAccessController currentStep={2} />
      {matches && <Stepper steps={steps} activeStep={1} mb={6} />}
      <ColumnForm loading={loading}>
        <BoxTitle variant="h5" component="h1" mb={2}>
          {content.title}
        </BoxTitle>
        <LoginForm setLoading={setLoading} />
        <Text component="p" variant="caption" align="center" mt={2.5}>
          {content.note}{' '}
          <Link component="button" onClick={() => setOpen(true)}>
            {content.tos}
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
