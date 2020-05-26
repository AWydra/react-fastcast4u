import React from 'react';
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

const Ad = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to="/order">
        <CardMedia
          className={classes.media}
          image="//fastcast4u.com/radio-directory/images/directory-banner.png"
          title="Contemplative Reptile"
        >
          <CardContent className={classes.content}>
            <Text className={classes.text} mb={4} variant="h4" component="h2">
              Start Your Own Online Radio Station
            </Text>
            <Button size="large" variant="contained" color="primary">
              Start Now
            </Button>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default Ad;
