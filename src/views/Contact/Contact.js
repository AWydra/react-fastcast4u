// @ts-nocheck
import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import { Grid, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import ContactFeature from 'components/molecules/ContactFeature/ContactFeature';
import CTASection from 'components/organisms/CTASection/CTASection';
import { Phone, Chat, Email } from '@material-ui/icons';
import history from 'utils/history';
import { useCurrentLanguage } from 'utils/customHooks';

const CallRequestModal = lazy(() => import('components/organisms/Modals/CallRequestModal'));

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
  const content = useSelector(state => state.language.contact);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const chat = useSelector(state => state.general.chat);
  const phoneActive = useSelector(state => state.general.phoneActive);
  const lng = useCurrentLanguage();

  const listData = useMemo(
    () => [
      {
        heading: content.features[1].numbers[0],
        content: '+1 (844) 203-2278',
        href: 'tel:+18442032278',
      },
      {
        heading: content.features[1].numbers[1],
        content: '+44 16 2232 2278',
        href: 'tel:+441622322278',
      },
      {
        heading: content.features[1].numbers[2],
        content: '+1 (925) 204-2278',
        href: 'tel:+19252042278',
      },
      {
        heading: 'Skype:',
        content: 'fastcast4u.com',
        href: 'skype:fastcast4u.com?call',
      },
    ],
    [content],
  );

  const Fallback = () => {
    useEffect(() => {
      setLoading(true);

      return () => setLoading(false);
    }, []);

    return '';
  };

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock title={content.title} subtitle={content.subtitle} component="h1" />
      <Grid container spacing={4}>
        <Grid className={classes.chat} item>
          <ContactFeature
            icon={Chat}
            title={content.features[0].title}
            desc={content.features[0].desc}
            active={chat.isOnline}
            button={{
              label: content.features[0].label,
              onClick: () => dispatch(generalActions.setChatDisplay(true)),
              disabled: !chat.isOnline,
            }}
          />
        </Grid>
        <Grid className={classes.phone} item>
          <ContactFeature
            icon={Phone}
            title={content.features[1].title}
            list={listData}
            active={phoneActive}
          />
        </Grid>
        <Grid className={classes.message} item>
          <ContactFeature
            icon={Email}
            title={content.features[2].title}
            desc={content.features[2].desc}
            button={{
              label: content.features[2].label,
              onClick: () => history.push(`${lng}/ticket`),
            }}
          />
        </Grid>
        <Grid className={classes.cta} item>
          <CTASection
            heading={content.call.heading}
            content={content.call.content}
            button={{
              label: content.call.label,
              onClick: () => setOpen(true),
              loading,
            }}
          />
          <Suspense fallback={<Fallback />}>
            {open && <CallRequestModal open={open} onClose={() => setOpen(false)} />}
          </Suspense>
        </Grid>
      </Grid>
    </FullContainer>
  );
};

export default Contact;
