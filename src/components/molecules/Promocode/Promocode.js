import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextField, FormControlLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';

const PromocodeContainer = styled.form`
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
`;

const useStyles = makeStyles(theme => ({
  label: {
    width: '100%',
    margin: 0,
    marginRight: theme.spacing(2),
    alignItems: 'flex-start',
  },
}));

const Promocode = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <PromocodeContainer onSubmit={onSubmit}>
      <FormControlLabel
        label={
          <Text component="h5" variant="h6" fontSize={16} fontWeight={600} my={1}>
            Promocode:
          </Text>
        }
        control={<TextField placeholder="Promocode" variant="outlined" size="small" fullWidth />}
        labelPlacement="top"
        className={classes.label}
      />
      <Button type="submit" variant="contained" color="primary" size="large">
        Apply
      </Button>
    </PromocodeContainer>
  );
};

Promocode.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Promocode;
