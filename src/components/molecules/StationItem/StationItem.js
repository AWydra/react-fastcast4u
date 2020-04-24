import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, Card, CardActionArea, CardContent, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import { modeSwitch } from 'utils/theme';
import coverPicture from 'assets/img/cover.png';

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 0;
`;

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    boxShadow: theme.shadows[3],
  },
  area: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
    },
  },
  content: {
    minWidth: 0,
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
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
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      flexGrow: 1,
      flexDirection: 'row',
    },
  },
  statsContent: {
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.pxToRem(18),
    color: modeSwitch(theme.palette.grey[800], theme.palette.grey[200]),
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
}));

const StationItem = ({ data }) => {
  const classes = useStyles();

  const coverPhoto = data.image.includes('nocover') ? coverPicture : data.image;

  return (
    <Card className={classes.root} component="li" onClick={() => console.log('clicked')}>
      <CardActionArea className={classes.area}>
        <ContentWrapper>
          <CardContent className={classes.icon}>
            <Avatar
              variant="rounded"
              alt={`${data.song} cover picture`}
              src={coverPhoto}
              className={classes.avatar}
            />
          </CardContent>
          <CardContent className={classes.content}>
            <Text component="h4" variant="h6" fontSize="1.125rem">
              {data.title}
            </Text>
            <Text variant="subtitle1">
              {data.artist} - {data.song}
            </Text>
            <Text variant="subtitle2" color="textSecondary">
              {data.bitrate} {data.format}
            </Text>
          </CardContent>
        </ContentWrapper>
        <CardContent className={classes.stats}>
          <Text className={classes.statsContent}>
            <ThumbUpIcon className={classes.statsIcon} /> {data.likes}
          </Text>
          <Text className={classes.statsContent}>
            <PeopleIcon className={classes.statsIcon} /> {data.listeners}
          </Text>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

StationItem.propTypes = {
  data: PropTypes.shape({
    artist: PropTypes.string,
    bitrate: PropTypes.string,
    format: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    listeners: PropTypes.string,
    proxy: PropTypes.string,
    song: PropTypes.string,
    stream: PropTypes.string,
    title: PropTypes.string,
    username: PropTypes.string,
    xml: PropTypes.string,
  }).isRequired,
};

export default StationItem;
