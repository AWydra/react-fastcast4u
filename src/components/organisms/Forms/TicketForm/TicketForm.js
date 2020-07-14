/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
import React, { useState } from 'react';
import generalServices from 'services/general';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Chip, Grid, InputLabel, Link, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import FormikInput from 'components/atoms/FormikInput/FormikInput';
import PhoneInput from 'components/atoms/PhoneInput/PhoneInput';
import Dropzone from 'components/organisms/Dropzone/Dropzone';
import reCaptcha from 'utils/reCaptcha';
import { useAlert } from 'utils/customHooks';

const useStyles = makeStyles(theme => ({
  phone: {
    marignTop: 7,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const TicketForm = () => {
  const classes = useStyles();
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sendTicket = async values => {
    setLoading(true);
    const token = await reCaptcha.generate();
    await generalServices.sendTicket({
      ...values,
      'g-recaptcha-response': token,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      attachments: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      email: Yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i, 'Invalid email address')
        .required('Required'),
      subject: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      message: Yup.string()
        .min(10, 'Must be 10 characters or more')
        .required('Required'),
    }),
    onSubmit: async values => {
      try {
        sendTicket(values);
        setLoading(false);
        alert.success(
          'Thank you, we have received your message! Our Support Team will respond as soon as possible.',
        );
        formik.resetForm();
      } catch (err) {
        alert.error(err.response.data.error || err.response.statusText);
        setLoading(false);
      }
    },
  });
  return (
    <Grid
      container
      spacing={2}
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Grid item xs={12} lg={4}>
        <FormikInput
          formik={formik}
          label="Full Name"
          name="name"
          type="text"
          autoComplete="name"
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <FormikInput formik={formik} label="Email" name="email" type="email" autoComplete="email" />
      </Grid>
      <Grid item xs={12} lg={4}>
        <PhoneInput
          name="phone"
          onChange={number => formik.setFieldValue('phone', number)}
          value={formik.values.phone}
          className={classes.phone}
        />
      </Grid>
      <Grid item xs={12}>
        <FormikInput
          formik={formik}
          label="Subject"
          name="subject"
          type="text"
          autoComplete="subject"
        />
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: 0 }}>
        <InputLabel>Attachments (optional)</InputLabel>
      </Grid>
      <Grid item xs={12} style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Button variant="contained" size="large" color="primary" onClick={() => setOpen(true)}>
          add files
        </Button>
        <div className={classes.chip} style={{ flex: 1 }}>
          {formik.values.attachments.map(file => (
            <Chip label={file.name} key={file.name} />
          ))}
        </div>
        <Dropzone
          open={open}
          onClose={() => setOpen(false)}
          onSave={files => {
            formik.setFieldValue('attachments', files);
            setOpen(false);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormikInput
          formik={formik}
          label="Message"
          name="message"
          multiline
          rows={6}
          type="text"
          autoComplete="message"
        />
      </Grid>

      <Grid item xs={12} className={classes.buttonContainer}>
        <Text style={{ textAlign: 'center', marginBottom: 12 }}>
          By submitting a message you agree on processing the provided data according to our{' '}
          <Link href="/privacy" target="_blank">
            Privacy Policy
          </Link>
        </Text>
        <CTAButton loading={loading} xlarge variant="contained" color="primary" type="submit">
          Submit
        </CTAButton>
      </Grid>
    </Grid>
  );
};

export default TicketForm;
