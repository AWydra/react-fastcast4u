import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';

const sections = [
  {
    img: 'https://img.fastcast4u.com/react/home/device1',
    heading: 'Broadcast live or use Auto DJ to stream online with no limits!',
    list: [
      'Unlimited Listeners',
      'Unlimited Traffic (Bandwidth)',
      'High audio quality - up to 320kbps',
      'Unlimited AutoDJ disc space',
    ],
  },
  {
    img: 'https://img.fastcast4u.com/react/start/schedule',
    heading: 'AutoDJ and Scheduler',
    content:
      'Upload and manage your Music Library online! With Unlimited Auto DJ easily Schedule Playlists, Jingles, and Ads!',
  },
  {
    img: 'https://img.fastcast4u.com/react/home/device1',
    heading: 'Live DJs on air!',
    content:
      'Stream live from your computer and create your own broadcasts. Use your microphone, mixer or mixing software to create amazing live shows',
  },
];

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const RadioServer = () => {
  const classes = useStyles();

  return (
    <FullContainer maxWidth="xl" overflowHidden>
      {sections.map((props, i) => (
        <React.Fragment key={i}>
          <RowSection {...props} long reverse={i % 2 === 0} />
          {i + 1 < sections.length && <Divider variant="middle" />}
        </React.Fragment>
      ))}
      <Text variant="h3" fontWeight={500} align="center" mt={10}>
        Lorem ipsum dolor sit amet
      </Text>
      <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
        Start Now
      </CTAButton>
    </FullContainer>
  );
};

export default RadioServer;
