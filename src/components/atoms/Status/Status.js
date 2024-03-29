import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 'auto',
    paddingTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 600,
  },
  icon: {
    fontSize: theme.typography.pxToRem(26),
    color: active => (active ? theme.palette.success.main : theme.palette.error.main),
  },
}));

const Status = ({ active }) => {
  const content = useSelector(state => state.language.components.status);
  const classes = useStyles(active);

  return (
    <Text className={classes.text}>
      <FiberManualRecordIcon className={classes.icon} />
      {active ? content.available : content.notAvailable}
    </Text>
  );
};

Status.defaultProps = {
  active: true,
};

Status.propTypes = {
  active: PropTypes.bool,
};

export default Status;
