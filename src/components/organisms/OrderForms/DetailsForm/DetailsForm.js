// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
  justify-content: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'space-between')};
`;

const DetailsForm = () => {
  const [cookies] = useCookies(['Fc4uOrder_Session']);
  const classes = useStyles();
  const { firstname, lastname, company, phone } = cookies.Fc4uOrder_Session;

  const formik = useFormik({
    initialValues: {
      firstname,
      lastname,
      company,
      phone,
      smsmarketing: false,
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      lastname: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    }),
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
        name="phone"
        onChange={number => formik.setFieldValue('phone', number)}
        value={formik.values.phone}
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
      <BtnContainer flexEnd>
        <Button component={Link} to="/order/wait" variant="contained" color="primary" type="submit">
          CONTINUE
        </Button>
      </BtnContainer>
    </form>
  );
};

export default DetailsForm;
