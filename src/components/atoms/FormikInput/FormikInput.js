import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const FormikInput = ({ formik, name, error, ...props }) => {
  const errorName = error || (formik.touched[name] && formik.errors[name]);

  return (
    <TextField
      variant="outlined"
      error={!!errorName}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      fullWidth
      helperText={errorName}
      margin="dense"
      {...props}
    />
  );
};

FormikInput.propTypes = {
  formik: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

FormikInput.defaultProps = {
  error: '',
};

export default FormikInput;
