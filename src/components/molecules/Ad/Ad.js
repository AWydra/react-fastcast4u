import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    top: theme.spacing(3),
  },
  media: {
    padding: theme.spacing(2.5, 0),
  },
  content: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  text: {
    textAlign: 'center',
  },
}));

const Ad = ({ image, text, label, to }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={to}>
        <CardMedia className={classes.media} image={image} title={text}>
          <CardContent className={classes.content}>
            <Text className={classes.text} mb={4} variant="h4" component="h2">
              {text}
            </Text>
            <Button size="large" variant="contained" color="primary">
              {label}
            </Button>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

Ad.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Ad;
