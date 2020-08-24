/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import openPopup from 'utils/openPopup';

const useStyles = makeStyles({
  subtitle: {
    display: 'block',
    fontSize: 18,
  },
  iframe: {
    width: '100%',
    height: '80vh',
    minHeight: 700,
    border: 'none',
  },
});

const handleClick = ev => {
  ev.preventDefault();
  openPopup('https://tawk.to/8107b3fa1971b7fc0417a653978897e5b82a7d1c', 1020, 600);
};

const AppPublication = () => {
  const classes = useStyles();

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock
        title="Schedule iOS App Submission to App Store"
        subtitle={
          <>
            <Text component="span" className={classes.subtitle}>
              1. Make sure your Apple developer account is pre-paid and ready.
            </Text>
            <Text component="span" className={classes.subtitle}>
              2. You need to be online and have access to your iOS device.
            </Text>
            <Text component="span" className={classes.subtitle}>
              3. Publication of your App will be arranged at the time you schedule through{' '}
              <Link href="#" onClick={ev => handleClick(ev)}>
                LiveChat
              </Link>
            </Text>
          </>
        }
      />

      <iframe
        className={classes.iframe}
        src="https://calendly.com/fastcast4u/app-publication"
        title="publication"
      />
    </FullContainer>
  );
};

export default AppPublication;
