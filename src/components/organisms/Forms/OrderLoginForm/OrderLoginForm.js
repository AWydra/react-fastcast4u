// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import { Link } from 'react-router-dom';
import orderServices from 'services/order';

import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import FormikInput from 'components/atoms/FormikInput/FormikInput';
import { useAlert } from 'utils/customHooks';
import history from 'utils/history';

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
  margin: 12px 0 0;
  display: flex;
  justify-content: space-between;
`;

const OrderLoginForm = ({ setLoading }) => {
  const { email, password, username, emailmarketing } = useSelector(state => state.order);
  const dispatch = useDispatch();
  const classes = useStyles();
  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      email,
      password,
      username,
      emailmarketing,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i, 'Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .max(30, 'Must be 30 characters or less')
        .matches(/^[^#%&?+\\]{1,}$/, "Can't contain characters #%&?+\\")
        .required('Required'),
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(16, 'Must be 16 characters or less')
        .matches(/^[^A-Z]{1,}$/, "Can't contain uppercase characters")
        .matches(/^[a-z0-9]{3,16}$/, "Can't contain special characters")
        .required('Required'),
    }),
    onSubmit: async values => {
      setLoading(true);
      try {
        await orderServices.setStep3(values);
        dispatch(orderActions.setCredentials(values));
        history.push('/order/payment');
      } catch (err) {
        alert.error(err.response.data.errorMessage || err.response.statusText);
        setLoading(false);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" className={classes.form}>
        <FormikInput
          formik={formik}
          label="Email"
          name="email"
          type="email"
          autoComplete="username"
        />
        <FormikInput
          formik={formik}
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <FormikInput formik={formik} label="Server Login Username" name="username" />
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
        </BtnContainer>
      </form>
    </>
  );
};

OrderLoginForm.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default OrderLoginForm;
