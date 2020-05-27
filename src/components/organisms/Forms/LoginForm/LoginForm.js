/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import loginServices from 'services/login';

import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, makeStyles } from '@material-ui/core';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import FormikInput from 'components/atoms/FormikInput/FormikInput';
import Text from 'components/atoms/Text/Text';
import { useAlert } from 'utils/customHooks';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& > *': {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(1),
    },
  },
  subtitle: {
    fontSize: theme.typography.pxToRem(17),
  },
  link: {
    width: '100%',
    textAlign: 'right',
  },
}));

const BtnContainer = styled.div`
  width: 100%;
  margin: 12px 0 0;
  display: flex;
  justify-content: center;
`;

const LoginForm = () => {
  const classes = useStyles();
  const alert = useAlert();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [forgot, setForgot] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginUser = async values => {
    setLoading(true);
    const token = await executeRecaptcha();
    const response = await loginServices.loginUser({
      ...values,
      token,
    });

    window.location.href = response.url;
  };

  const forgotPassword = async values => {
    setLoading(true);
    const token = await executeRecaptcha();
    await loginServices.forgotPassword({
      usernameOrEmail: values.username,
      token,
      stage: 'one',
    });
    setLoading(false);
    alert.success('Link to reset your password was sent to your email');
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      password:
        !forgot &&
        Yup.string()
          .min(3, 'Must be 3 characters or more')
          .max(30, 'Must be 30 characters or less')
          .required('Required'),
    }),
    onSubmit: async values => {
      try {
        forgot ? await forgotPassword(values) : await loginUser(values);
      } catch (err) {
        alert.error(err.response.data.error || err.response.statusText);
        setLoading(false);
      }
    },
  });
  return (
    <>
      <Text component="h1" variant="h5" fontWeight={500}>
        {forgot ? 'Reset your password' : 'Login'}
      </Text>
      {!forgot && <Text className={classes.subtitle}>Sign In To Your Client Area Or Server</Text>}
      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" className={classes.form}>
        <FormikInput
          formik={formik}
          label="Username or email"
          name="username"
          type="text"
          autoComplete="username"
        />
        {!forgot && (
          <FormikInput
            formik={formik}
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
        )}
        <Link
          className={classes.link}
          component="button"
          type="button"
          onClick={() => setForgot(!forgot)}
          disabled={loading}
        >
          {forgot ? 'Back to login' : 'Forgot password?'}
        </Link>
        <BtnContainer>
          <CTAButton
            loading={loading}
            size="large"
            variant="contained"
            color="primary"
            type="submit"
          >
            {forgot ? 'Reset Password' : 'Login'}
          </CTAButton>
        </BtnContainer>
      </form>
    </>
  );
};

export default LoginForm;
