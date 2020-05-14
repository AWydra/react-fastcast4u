// @ts-nocheck
import React from 'react';
import { useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import { Grid, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import ContactFeature from 'components/molecules/ContactFeature/ContactFeature';
import { Phone, Chat, Email } from '@material-ui/icons';
import history from 'utils/history';

const listData = [
  {
    heading: 'USA Toll Free:',
    content: '+1 (844) 203-2278',
    href: 'tel:+18442032278',
  },
  {
    heading: 'UK local:',
    content: '+44 16 2232 2278',
    href: 'tel:+441622322278',
  },
  {
    heading: 'USA local:',
    content: '+1 (925) 204-2278',
    href: 'tel:+19252042278',
  },
  {
    heading: 'Skype:',
    content: 'fastcast4u.com',
    href: 'skype:fastcast4u.com?call',
  },
];

const useStyles = makeStyles(theme => ({
  item: {
    height: '100%',
    border: 'solid 1px',
    borderColor: theme.palette.divider,
  },
  chat: {
    flex: '100%',
    order: 3,
    [theme.breakpoints.up('sm')]: {
      flex: 1,
    },
    [theme.breakpoints.up('lg')]: {
      flex: 2,
      order: 1,
    },
  },
  phone: {
    flex: '100%',
    order: 1,
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('lg')]: {
      flex: 3,
      order: 2,
    },
  },
  message: {
    flex: '100%',
    order: 4,
    [theme.breakpoints.up('sm')]: {
      flex: 1,
    },
    [theme.breakpoints.up('lg')]: {
      flex: 2,
      order: 3,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock title="Contact page" subtitle="Whatever." component="h1" />
      <Grid container spacing={4}>
        <Grid className={classes.chat} item>
          <ContactFeature
            icon={Chat}
            title="Live Chat"
            desc="Chat with a friendly Customer Service agent"
            button={{
              label: 'Open Chat',
              onClick: () => dispatch(generalActions.setChatDisplay(true)),
            }}
          />
        </Grid>
        <Grid className={classes.phone} item>
          <ContactFeature icon={Phone} title="Phone Support" list={listData} />
        </Grid>
        <Grid className={classes.message} item>
          <ContactFeature
            icon={Email}
            title="Message Us"
            desc="All messages are answered on daily basis"
            button={{
              label: 'Leave Message',
              onClick: () => history.push('/ticket'),
            }}
          />
        </Grid>
      </Grid>
    </FullContainer>
  );
};

export default Contact;
