import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box, makeStyles, Chip } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Text from 'components/atoms/Text/Text';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    color: modeSwitch(theme.palette.primary.main, 'white'),
  },
  unit: {
    fontSize: theme.spacing(3.75),
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: theme.spacing(8.5),
    lineHeight: 1.3,
  },
  old: {
    alignSelf: 'flex-start',
    position: 'relative',
    color: theme.palette.grey[modeSwitch(600, 400)],
    fontSize: '1.75em',
    '&:before': {
      content: '""',
      width: '110%',
      position: 'absolute',
      top: '50%',
      left: -1,
      borderBottom: 'solid 2px',
      borderBottomColor: theme.palette.grey[modeSwitch(700, 300)],
      transform: 'rotate(-16deg)',
    },
  },
  chip: {
    minWidth: '50%',
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 2),
    fontSize: '1.1em',
    fontWeight: 600,
    color: modeSwitch(theme.palette.primary.main, 'white'),
  },
}));

const Price = ({ current, regular }) => {
  const currency = useSelector(state => state.general.currency);
  const content = useSelector(state => state.language.components.price);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        {regular && current !== regular && <Text>{content.now}</Text>}
        <Text className={classes.unit}>{currency}</Text>
        <Text className={classes.price}>
          {current === false ? <Skeleton variant="text" width={100} /> : current}
        </Text>
        {regular && current !== regular && (
          <Text className={classes.old}>
            {currency}
            {regular}
          </Text>
        )}
      </Box>
      {regular && current !== regular && (
        <Chip
          className={classes.chip}
          label={`${content.save} ${currency}${(regular - current).toFixed(2)}`}
          color="primary"
          variant="outlined"
        />
      )}
    </Box>
  );
};

Price.defaultProps = {
  current: false,
  regular: false,
};

Price.propTypes = {
  current: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  regular: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default Price;
