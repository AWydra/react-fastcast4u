import React from 'react';
import styled from 'styled-components';
import { Radio, RadioGroup, FormControlLabel, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  group: {
    marginLeft: theme.spacing(1.5),
  },
  label: {
    '& > span': {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.type !== 'dark' && theme.palette.grey[800],
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
  },
  radio: {
    padding: 4,
    marginRight: 4,
    '& svg': {
      width: 26,
      height: 26,
    },
  },
  chip: {
    height: 20,
    marginLeft: theme.spacing(2),
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 0.75,
    cursor: 'pointer',
  },
}));

const BillingContainer = styled.div`
  padding-bottom: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
`;

const BillingCycle = ({ cycle, setCycle }) => {
  const handleChange = ({ target }) => {
    setCycle(target.value);
  };

  const classes = useStyles();

  return (
    <BillingContainer>
      <Text component="h5" variant="h6" fontSize={18} fontWeight={600} mb={1}>
        Billing Cycle:
      </Text>
      <RadioGroup
        className={classes.group}
        aria-label="Billing cycle"
        name="cycle"
        value={cycle}
        onChange={handleChange}
      >
        <FormGroup>
          <FormControlLabel
            className={classes.label}
            value="monthly"
            control={<Radio className={classes.radio} color="primary" />}
            label="Monthly"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            className={classes.label}
            value="annually"
            control={<Radio className={classes.radio} color="primary" />}
            label={
              <>
                12 Months
                <Chip
                  className={classes.chip}
                  color="primary"
                  size="small"
                  label="+2 MONTHS FREE"
                />
              </>
            }
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            className={classes.label}
            value="biennially"
            control={<Radio className={classes.radio} color="primary" />}
            label={
              <>
                24 Months
                <Chip
                  className={classes.chip}
                  color="primary"
                  size="small"
                  label="+6 MONTHS FREE"
                />
              </>
            }
          />
        </FormGroup>
      </RadioGroup>
    </BillingContainer>
  );
};

export default BillingCycle;
