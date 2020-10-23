import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cmsActions from 'actions/cmsActions';
import cmsServices from 'services/cms';
import styled, { css } from 'styled-components';

import { Box, IconButton, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import Countdown from 'components/atoms/Countdown/Countdown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Notification = styled(Link)`
  ${({ theme }) => css`
    width: 280px;
    padding: ${theme.spacing(2.5, 0)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.palette.primary.main};
    border: solid black 4px;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    text-align: center;
  `}
`;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    right: 10,
    bottom: theme.spacing(8),
    zIndex: theme.zIndex.appBar,
  },
  icon: {
    position: 'absolute',
    top: -20,
    right: -10,
    filter: 'drop-shadow( 0px 0px 2px white)',
    zIndex: 1,
  },
  img: {
    paddingBottom: theme.spacing(2),
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translateY(-100%)',
  },
  countdown: {
    display: 'block',
    fontSize: theme.typography.pxToRem(26),
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
}));

const PromoNotification = ({ ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const currency = useSelector(state => state.general.currency);
  const data = useSelector(state => state.cms.notification);
  const dispatch = useDispatch();

  const handleClick = () => setOpen(false);

  useEffect(() => {
    !data.content &&
      cmsServices.getNotificationData().then(res => {
        console.log(res);
        dispatch(cmsActions.setNotificationData(res));
      });
  }, [data]);

  return (
    data.active &&
    matches &&
    open && (
      <Box className={classes.root} {...props}>
        <IconButton
          className={classes.icon}
          onClick={handleClick}
          size="small"
          aria-label="close popup"
        >
          <HighlightOffIcon fontSize="inherit" />
        </IconButton>
        <Notification to={data.link}>
          <Image className={classes.img} src={`https://fastciast-cms.herokuapp.com${data.image}`} />
          <Text
            variant="h5"
            fontWeight={600}
            mb={1}
            px={2}
            dangerouslySetInnerHTML={{ __html: data.content.replace('{currency}', currency) }}
          />
          <Countdown className={classes.countdown} date={new Date(data.date)} />
        </Notification>
      </Box>
    )
  );
};

export default PromoNotification;
