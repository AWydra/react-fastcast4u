import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    fontWeight: 700,
  },
  color: {
    color: theme.palette.primary.main,
  },
}));

const BoxTitle = ({ children, ...props }) => {
  const classes = useStyles();

  const sentence = children.split(' ').map(word => `${word} `);
  if (sentence.length >= 2) {
    sentence[1] = (
      <span data-testid="colored" className={classes.color}>
        {sentence[1]}{' '}
      </span>
    );
  }

  return (
    <Text className={classes.title} {...props}>
      {sentence.map((word, i) => (
        <React.Fragment key={i}>{word}</React.Fragment>
      ))}
    </Text>
  );
};

BoxTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BoxTitle;
