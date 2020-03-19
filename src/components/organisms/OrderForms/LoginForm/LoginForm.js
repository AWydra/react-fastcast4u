// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import orderServices from 'services/order';

import styled from 'styled-components';
import { useFormik } from 'formik';
import { Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import FormikInput from 'components/atoms/FormikInput/FormikInput';
import Alert from 'components/atoms/Alert/Alert';
import orderActions from 'actions/orderActions';

const useStyles = makeStyles(theme => ({
  form: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(1),
    },
  },
}));

const BtnContainer = styled.div`
  width: 100%;
  margin: 20px 0 0;
  display: flex;
  justify-content: space-between;
`;

const validate = (values, badUsername) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 3) {
    errors.password = 'Must be 3 characters or more';
  }

  if (!values.otter) {
    errors.otter = 'Required';
  } else if (values.otter.length < 3) {
    errors.otter = 'Must be 3 characters or more';
  } else if (values.otter.length > 8) {
    errors.otter = 'Must be 8 characters or less';
  } else if (!/^[a-z0-9]{3,8}$/.test(values.otter)) {
    errors.otter = 'Must contain only lowercase letters and numbers';
  } else if (badUsername) {
    errors.otter = 'Pomocy';
  }
  return errors;
};

const LoginForm = ({ setLoading }) => {
  const { email, password, username, emailmarketing } = useSelector(state => state.order);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const formik = useFormik({
    initialValues: {
      email,
      password,
      otter: username,
      emailmarketing,
    },
    validate,
    onSubmit: async values => {
      setLoading(true);
      try {
        const data = {
          email: values.email,
          password: values.password,
          username: values.otter,
          emailmarketing: values.emailmarketing,
        };

        await orderServices.setStep3(data);
        dispatch(orderActions.setCredentials(data));
        setRedirect(true);
      } catch (err) {
        setError(err.response.data.errorMessage);
        setLoading(false);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" className={classes.form}>
        <FormikInput formik={formik} label="Email" name="email" type="email" />
        <FormikInput formik={formik} label="Password" name="password" type="password" />
        <FormikInput formik={formik} label="Server Login Username" name="otter" />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="emailmarketing"
              onChange={formik.handleChange}
              checked={formik.values.emailmarketing}
            />
          }
          label="Receive Service related emails and offers"
        />
        <BtnContainer>
          <Button component={Link} to="/order/package" variant="contained" color="primary">
            BACK
          </Button>
          <Button variant="contained" color="primary" type="submit">
            CONTINUE
          </Button>
          {redirect && <Redirect push to="/order/payment" />}
        </BtnContainer>
      </form>
      <Alert severity="error" open={!!error} onClose={() => setError('')}>
        {error}
      </Alert>
    </>
  );
};

LoginForm.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default LoginForm;
