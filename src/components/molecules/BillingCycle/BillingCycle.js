// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import styled from 'styled-components';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
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
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 600,
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

const BillingCycle = () => {
  const cycle = useSelector(state => state.order.cycle);
  const content = useSelector(state => state.language.orderPackage.summary.billing);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(orderActions.setCycle(target.value));
  };

  const classes = useStyles();

  return (
    <BillingContainer>
      <Text component="h5" variant="h6" fontSize={18} fontWeight={600} mb={1}>
        {content.heading}
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
            label={content.monthly}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            className={classes.label}
            value="annually"
            control={<Radio className={classes.radio} color="primary" />}
            label={
              <>
                {content.annually}
                {/* <Chip
                  className={classes.chip}
                  color="primary"
                  size="small"
                  label={content.months2}
                /> */}
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
                {content.biennially}
                {/* <Chip
                  className={classes.chip}
                  color="primary"
                  size="small"
                  label={content.months6}
                /> */}
              </>
            }
          />
        </FormGroup>
      </RadioGroup>
    </BillingContainer>
  );
};

export default BillingCycle;
