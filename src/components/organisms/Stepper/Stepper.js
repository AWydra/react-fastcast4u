import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {},
  completed: {},
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[5],
  },
  completed: {
    backgroundColor: theme.palette.primary.main,
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
      <Text fontSize={22}>{index}</Text>
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
