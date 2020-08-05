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
import { useAlert, useCurrentLanguage } from 'utils/customHooks';
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
  const content = useSelector(state => state.language.orderLogin);
  const { email, password, username, emailmarketing } = useSelector(state => state.order);
  const dispatch = useDispatch();
  const lng = useCurrentLanguage();
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
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i, content.errors.email)
        .required(content.errors.required),
      password: Yup.string()
        .min(8, content.errors.min8)
        .max(30, content.errors.max30)
        .matches(/^[^#%&?+\\]{1,}$/, content.errors.specificChars)
        .required(content.errors.required),
      username: Yup.string()
        .min(3, content.errors.min3)
        .max(16, content.errors.max16)
        .matches(/^[^A-Z]{1,}$/, content.errors.uppercase)
        .matches(/^[a-z0-9]{3,16}$/, content.errors.special)
        .required(content.errors.required),
    }),
    onSubmit: async values => {
      setLoading(true);
      try {
        await orderServices.setStep3(values);
        dispatch(orderActions.setCredentials(values));
        history.push(`${lng}/order/payment`);
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
          label={content.email}
          name="email"
          type="email"
          autoComplete="username"
        />
        <FormikInput
          formik={formik}
          label={content.password}
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <FormikInput formik={formik} label={content.username} name="username" />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="emailmarketing"
              onChange={formik.handleChange}
              checked={formik.values.emailmarketing}
            />
          }
          label={content.accept}
        />
        <BtnContainer>
          <Button component={Link} to={`${lng}/order/package`} variant="contained" color="primary">
            {content.back}
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {content.continue}
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
