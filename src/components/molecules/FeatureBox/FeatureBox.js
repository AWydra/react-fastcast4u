import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';
import theme from 'theme/mainTheme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    boxShadow: theme.shadows[5],
  },
  icon: {
    '& > svg': {
      fontSize: '3rem',
    },
  },
  content: {
    paddingLeft: 0,
    flexGrow: 1,
  },
}));

const FeatureBox = ({ icon, heading, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.icon}>{icon}</CardContent>
      <CardContent className={classes.content}>
        <Text component="h4" variant="h6">
          {heading}
        </Text>
        <Text variant="subtitle2" color="textSecondary">
          {description}
        </Text>
      </CardContent>
    </Card>
  );
};

FeatureBox.propTypes = {
  icon: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureBox;
