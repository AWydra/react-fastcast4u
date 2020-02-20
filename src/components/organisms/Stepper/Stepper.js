import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const ColorlibConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 20,
    left: 'calc(-50% + 21px)',
    right: 'calc(50% + 21px)',
  },
  active: {},
  completed: {},
  line: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.type !== 'dark' ? 'hsl(240, 17%, 93%)' : 'hsl(0, 0%, 40%)',
    borderRadius: 1,
  },
}))(StepConnector);

const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid hsl(0, 0%, 67%) 2px',
    borderRadius: '50%',
    zIndex: 1,
  },
  active: {
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
    color: 'hsl(0, 0%, 100%)',
    boxShadow: theme.shadows[5],
  },
  completed: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: 'hsl(0, 0%, 100%)',
  },
}));

const ColorlibStepIcon = ({ active, completed, icon: index }) => {
  const classes = useColorlibStepIconStyles();

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      <Text fontSize={22} fontWeight={500}>
        {index}
      </Text>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  stepper: {
    padding: 0,
    background: 'transparent',
  },
});

const CustomizedSteppers = ({ steps, activeStep }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper
        className={classes.stepper}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

ColorlibStepIcon.defaultProps = {
  active: false,
  completed: false,
  icon: false,
};

CustomizedSteppers.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default CustomizedSteppers;
