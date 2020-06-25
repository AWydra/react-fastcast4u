// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import styled from 'styled-components';
import { Card, CardActionArea, CardContent, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Image from 'components/atoms/Image/Image';
import Text from 'components/atoms/Text/Text';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import { modeSwitch } from 'utils/theme';
import defaultCoverPicture from 'assets/img/cover.png';

const ContentWrapper = styled.div`
  width: 100%;
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
    flex: 1,
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
    minWidth: 110,
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
  const loading = useSelector(state => state.directory.loading);
  const dispatch = useDispatch();

  const coverPhoto = data.image.includes('nocover') ? defaultCoverPicture : data.image;

  const handleClick = () => {
    dispatch(
      directoryActions.setPlayerData({
        id: data.id,
        player: data.player,
        proxy: data.stream,
        servertype: data.servertype,
        metadata: data.metadata,
        station: data.title,
      }),
    );
  };

  return (
    <Card className={classes.root} component="li">
      <CardActionArea className={classes.area} onClick={handleClick} disabled={loading}>
        <ContentWrapper>
          <CardContent className={classes.icon}>
            {loading ? (
              <Skeleton variant="rect" className={classes.avatar} />
            ) : (
              <Image
                variant="rounded"
                alt={`${data.song} cover picture`}
                src={coverPhoto}
                className={classes.avatar}
                onError={ev => {
                  ev.target.src = defaultCoverPicture;
                }}
              />
            )}
          </CardContent>
          <CardContent className={classes.content}>
            <Text component="h4" variant="h6" fontSize="1.125rem">
              {loading ? <Skeleton variant="text" width="80%" /> : data.title}
            </Text>
            <Text variant="subtitle1">
              {loading ? <Skeleton variant="text" width="50%" /> : `${data.artist} - ${data.song}`}
            </Text>
            <Text variant="subtitle2" color="textSecondary">
              {loading ? <Skeleton variant="text" width={100} /> : `${data.bitrate} ${data.format}`}
            </Text>
          </CardContent>
        </ContentWrapper>
        <CardContent className={classes.stats}>
          <Text className={classes.statsContent}>
            <ThumbUpIcon className={classes.statsIcon} />
            {loading ? <Skeleton variant="text" width={35} /> : data.likes}
          </Text>
          <Text className={classes.statsContent}>
            <PeopleIcon className={classes.statsIcon} />
            {loading ? <Skeleton variant="text" width={35} /> : data.listeners}
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    likes: PropTypes.number,
    listeners: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    player: PropTypes.string,
    proxy: PropTypes.string,
    servertype: PropTypes.string,
    song: PropTypes.string,
    stream: PropTypes.string,
    title: PropTypes.string,
    username: PropTypes.string,
    metadata: PropTypes.string,
  }).isRequired,
};

export default StationItem;
