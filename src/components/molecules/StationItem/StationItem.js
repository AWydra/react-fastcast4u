import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar, Card, CardActionArea, CardContent, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAlt';
import PeopleIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0),
    boxShadow: theme.shadows[3],
    listStyle: 'none',
  },
  area: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    minWidth: 0,
    paddingLeft: theme.spacing(1),
    flexGrow: 1,
    '& > *': {
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    boxShadow: theme.shadows[3],
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  statsContent: {
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.pxToRem(18),
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
}));

const StationItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} component="li">
      <CardActionArea className={classes.area}>
        <CardContent className={classes.icon}>
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src="https://www.aquablog.ca/wp-content/uploads/2020/01/fave15.jpg"
            className={classes.avatar}
          />
        </CardContent>
        <CardContent className={classes.content}>
          <Text component="h4" variant="h6" fontSize="1.125rem">
            Greatest Hits Radio Stream
          </Text>
          <Text variant="subtitle1">Savage Garden - To the moon and back</Text>
          <Text variant="subtitle2" color="textSecondary">
            96 Kbps mp3
          </Text>
        </CardContent>
        <CardContent className={classes.stats}>
          <Text className={classes.statsContent}>
            <ThumbUpIcon className={classes.statsIcon} /> 277
          </Text>
          <Text className={classes.statsContent}>
            <PeopleIcon className={classes.statsIcon} /> 4
          </Text>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// StationItem.propTypes = {
//   icon: PropTypes.element.isRequired,
//   heading: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default StationItem;
