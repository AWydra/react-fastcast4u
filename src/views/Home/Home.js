// @ts-nocheck
import React from 'react';
import { Divider, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
// import CTAButton from 'components/atoms/CTAButton/CTAButton';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import Accordion from 'components/organisms/Accordion/Accordion';
// import RocketIcon from 'assets/svg/RocketIcon';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import history from 'utils/history';

const heroData = {
  heading: 'Add your Online Radio Station to Alexa',
  pictures: {
    mobile: 'https://img.fastcast4u.com/react/home/home-bg-mobile',
    desktop: 'https://img.fastcast4u.com/react/home/home-bg',
    alt: 'Alexa on a desk',
  },
  buttons: [
    {
      label: '\xa0GET NOW\xa0',
      onClick: () => history.push('/alexa-skill'),
      color: 'secondary',
    },
  ],
};

const sections = [
  {
    img: 'https://img.fastcast4u.com/react/home/device1',
    heading: 'Start Streaming Online in 3\xa0minutes',
    content: 'Complete Radio Server Package',
    button: {
      label: 'Start Now',
      to: '/order',
    },
  },
  {
    img: 'https://img.fastcast4u.com/react/home/IPadIP',
    heading: 'Mobile App',
    content: 'Create Your Own Application for Android &\xa0iOS',
    button: {
      label: 'Start Now',
      to: '/order',
    },
  },
  {
    img: 'https://img.fastcast4u.com/react/home/wpdev1',
    heading: 'WebPlayer Page',
    content: 'Customizable Radio Player for listeners',
    button: {
      label: 'Start Now',
      to: '/order',
    },
  },
  {
    img: 'https://img.fastcast4u.com/react/home/alexa',
    heading: 'Alexa Radio Skill',
    content: 'Add your radio stream to Alexa',
    button: {
      label: 'Get Now',
      to: '/alexa-skill',
    },
  },
];

const accordion = [
  {
    heading: 'How to start streaming online?',
    content:
      'With FastCast4u you can start streaming online in 3 minutes. Sign in, create a package and your Radio Server will be set up automatically, just upload music, broadcasts or shows or connect a live DJ from your computer.',
  },
  {
    heading: 'Earn on streaming online',
    content:
      'SHOUTcast Radio Servers come with TargetSpot Stream Monetization program. You can also make money online by placing ad banners on your Web Player Page and activating Admob Ads on Mobile Apps. Lastly, your radio station can rely on Donates from satisfied listeners.',
  },
  {
    heading: 'Web Player Page & Radio Player',
    content:
      'Web Player Page will automatically go online with your Radio Server. You don’t need web hosting, complicated website builders or domains - just customize the page and share with your listeners. The customize Radio Player is also available as an embed widget for websites.',
  },
  {
    heading: 'Mobile Apps',
    content:
      'Mobile App for Android, iPhone & iPad features a Player for Online Radio and Live TV/Video streams. Your social media and website can be available in a built-in WebView. Using an Online App Creator you get a customized App with your own branding, artwork and theme.',
  },
];

const Home = () => {
  return (
    <>
      {/* <FullContainer center maxWidth="xl">
        <Text component="h1" variant="h2" px={2} fontWeight={500} align="center" gutterBottom>
          Create Your Own Internet Radio Station
        </Text>
        <CTAButton
          color="primary"
          size="large"
          component={Link}
          to="/order"
          xlarge
          endIcon={<RocketIcon />}
          mt={4}
        >
          START NOW
        </CTAButton>
      </FullContainer> */}
      <HeroSection left data={heroData} />
      <FullContainer maxWidth="xl" overflowHidden>
        {sections.map((props, i) => (
          <React.Fragment key={i}>
            <RowSection {...props} reverse={i % 2 === 1} />
            {i + 1 < sections.length && <Divider variant="middle" />}
          </React.Fragment>
        ))}
      </FullContainer>
      <Container maxWidth="xl">
        <Text component="h2" variant="h3" mt={4} mb={6} align="center" fontWeight={500}>
          Frequently Asked Questions
        </Text>
        <Accordion data={accordion} />
      </Container>
    </>
  );
};

export default Home;
