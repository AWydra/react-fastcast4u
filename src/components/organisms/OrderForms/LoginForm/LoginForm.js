// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import FormikInput from 'components/atoms/FormikInput/FormikInput';

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
  margin-top: 20px;
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

const LoginForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      otter: '',
      acceptedOffers: false,
    },
    validate,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" className={classes.form}>
      <FormikInput formik={formik} label="Email" name="email" type="email" />
      <FormikInput formik={formik} label="Password" name="password" type="password" />
      <FormikInput
        formik={formik}
        label="Server Login Username"
        name="otter"
        // error="Username is already taken"
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            name="acceptedOffers"
            onChange={formik.handleChange}
            checked={formik.values.acceptedOffers}
          />
        }
        label="Receive Service related emails and offers"
      />
      <BtnContainer>
        <Button
          component={Link}
          to="/order/package"
          variant="contained"
          color="primary"
          type="submit"
        >
          BACK
        </Button>
        <Button variant="contained" color="primary" type="submit">
          CONTINUE
        </Button>
      </BtnContainer>
    </form>
  );
};

export default LoginForm;
