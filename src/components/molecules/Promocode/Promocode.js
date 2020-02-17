import React from 'react';
import styled from 'styled-components';
import { TextField, FormControlLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';

const PromocodeContainer = styled.div`
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

const Promocode = () => {
  const classes = useStyles();

  return (
    <PromocodeContainer>
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
      <Button variant="contained" color="primary" size="large">
        Apply
      </Button>
    </PromocodeContainer>
  );
};

export default Promocode;
