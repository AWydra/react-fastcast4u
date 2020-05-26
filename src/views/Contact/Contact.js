// @ts-nocheck
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import { Grid, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import ContactFeature from 'components/molecules/ContactFeature/ContactFeature';
import CTASection from 'components/organisms/CTASection/CTASection';
import { Phone, Chat, Email } from '@material-ui/icons';
import history from 'utils/history';

const CallRequestModal = lazy(() => import('components/organisms/Modals/CallRequestModal'));

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
  cta: {
    flex: '100%',
    order: 4,
  },
}));

const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(true);
  const chat = useSelector(state => state.general.chat);

  useEffect(() => {
    const isChatOnline = () =>
      chat.getStatus && chat.getStatus() === 'online' ? setStatus(true) : setStatus(false);

    isChatOnline();
    const interval = setInterval(isChatOnline, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [chat]);

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock title="Contact page" subtitle="Whatever." component="h1" />
      <Grid container spacing={4}>
        <Grid className={classes.chat} item>
          <ContactFeature
            icon={Chat}
            title="Live Chat"
            desc="Chat with a friendly Customer Service agent"
            active={status}
            button={{
              label: 'Open Chat',
              onClick: () => dispatch(generalActions.setChatDisplay(true)),
              disabled: !status,
            }}
          />
        </Grid>
        <Grid className={classes.phone} item>
          <ContactFeature icon={Phone} title="Phone Support" list={listData} active={status} />
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
        <Grid className={classes.cta} item>
          <CTASection
            heading="Would you like us to call you?"
            content="Just leave your number. We will call back as soon as possible"
            button={{
              label: 'REQUEST CALL',
              onClick: () => setOpen(true),
            }}
          />
          <Suspense fallback="">
            {open && <CallRequestModal open={open} onClose={() => setOpen(false)} />}
          </Suspense>
        </Grid>
      </Grid>
    </FullContainer>
  );
};

export default Contact;
