/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { Link, CircularProgress, useMediaQuery, useTheme } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/atoms/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Text from 'components/atoms/Text/Text';
import LoadingCover from 'components/molecules/LoadingCover/LoadingCover';
import Stepper from 'components/organisms/Stepper/Stepper';
import LoginForm from 'components/organisms/OrderForms/LoginForm/LoginForm';

const TosModal = lazy(() => import('components/molecules/TosModal/TosModal'));

const OrderLogin = () => {
  const [cookies] = useCookies(['Fc4uOrder_Session']);
  const [redirect, setRedirect] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!cookies.Fc4uOrder_Session) return setRedirect(true);
    const { step } = cookies.Fc4uOrder_Session;
    step < 2 && setRedirect(true);
  }, [cookies.Fc4uOrder_Session]);

  return (
    <FullContainer center centerX>
      {redirect && <Redirect to="/order/package" />}
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
