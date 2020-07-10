// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import FormikInput from 'components/atoms/FormikInput/FormikInput';
import PhoneInput from 'components/atoms/PhoneInput/PhoneInput';
import orderServices from 'services/order';
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
  margin: 20px 0 0;
  display: flex;
  justify-content: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'space-between')};
`;

const OrderDetailsForm = ({ independent, setLoading, additionalData, setHandler }) => {
  const [cookies] = useCookies(['Fc4uOrder_Session']);
  const classes = useStyles();
  const alert = useAlert();
  const { firstname = '', lastname = '', company = '', phone = '' } = independent
    ? {}
    : cookies.Fc4uOrder_Session;

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
    onSubmit: async values => {
      try {
        setLoading(true);
        const data = {
          ...values,
          phone: values.phone.replace(/\D+/g, ''),
        };
        await (independent
          ? orderServices.updateDetails({ ...data, ...additionalData })
          : orderServices.setStep6(data));
        !independent && history.replace('/order/pending');
        setHandler({
          heading: 'Profile Successfuly Updated - Thank you',
          hide: true,
          redirect: '/',
        });
        formik.resetForm();
      } catch (err) {
        alert.error(err.response.data.errorMessage || err.message);
      } finally {
        setLoading(false);
      }
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
        label="Receive Service related SMS"
      />
      <BtnContainer flexEnd>
        <Button variant="contained" color="primary" type="submit">
          {independent ? 'Send' : 'FINISH'}
        </Button>
      </BtnContainer>
    </form>
  );
};

OrderDetailsForm.defaultProps = {
  independent: false,
  additionalData: {},
  setHandler: () => {},
};

OrderDetailsForm.propTypes = {
  independent: PropTypes.bool,
  setLoading: PropTypes.func.isRequired,
  additionalData: PropTypes.objectOf(PropTypes.string),
  setHandler: PropTypes.func,
};

export default OrderDetailsForm;
