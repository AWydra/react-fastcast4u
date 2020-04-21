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

const LoginForm = ({ setLoading }) => {
  const { email, password, username, emailmarketing } = useSelector(state => state.order);
  const dispatch = useDispatch();
  const classes = useStyles();
  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      email,
      password,
      otter: username,
      emailmarketing,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      otter: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(8, 'Must be 8 characters or less')
        .matches(/^[a-z0-9]{3,8}$/, "Can't contain special characters")
        .required('Required'),
    }),
    onSubmit: async values => {
      setLoading(true);
      try {
        const data = {
          ...values,
          username: values.otter,
        };

        await orderServices.setStep3(data);
        dispatch(orderActions.setCredentials(data));
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
        </BtnContainer>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default LoginForm;
