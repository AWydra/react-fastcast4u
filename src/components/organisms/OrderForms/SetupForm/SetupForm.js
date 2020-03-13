// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import FormikInput from 'components/atoms/FormikInput/FormikInput';
import PhoneInput from 'components/atoms/PhoneInput/PhoneInput';

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

const validate = values => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length < 3) {
    errors.firstname = 'Must be 3 characters or more';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length < 3) {
    errors.lastname = 'Must be 3 characters or more';
  }
  return errors;
};

const SetupForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      company: '',
      phonenumber: '',
      smsmarketing: false,
    },
    validate,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" className={classes.form}>
      <FormikInput formik={formik} label="First Name" name="firstname" type="text" />
      <FormikInput formik={formik} label="Last Name" name="lastname" type="text" />
      <FormikInput formik={formik} label="Company (optional)" name="company" type="text" />
      <PhoneInput
        name="phonenumber"
        onChange={number => formik.setFieldValue('phonenumber', number)}
        value={formik.values.phonenumber}
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            name="smsmarketing"
            onChange={formik.handleChange}
            checked={formik.values.acceptedOffers}
          />
        }
        label="Receive Service related emails and special offers"
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
        <Button
          component={Link}
          to="/order/payment"
          variant="contained"
          color="primary"
          type="submit"
        >
          CONTINUE
        </Button>
      </BtnContainer>
    </form>
  );
};

export default SetupForm;
