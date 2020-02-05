// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Divider, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import RocketIcon from 'assets/svg/RocketIcon';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import theme from 'theme/mainTheme';

const sections = [
  {
    img: 'https://fastcast4u.com/images/start/device1.png',
    heading: 'Start Streaming Online in 3 minutes',
    content: 'Complete Radio Server Package',
    btn: 'Start Now',
    link: '/link',
  },
  {
    img: 'https://fastcast4u.com/images/app/IPadIP.png',
    heading: 'Mobile App',
    content: 'Create Your Own Application for Android &\xa0Apple iOS',
    btn: 'Start Now',
    link: '/link',
  },
  {
    img: 'https://fastcast4u.com/images/landing/wpdev1.png',
    heading: 'WebPlayer Page',
    content: 'Customizable Radio Player for listeners',
    btn: 'Start Now',
    link: '/link',
  },
  {
    img: 'https://fastcast4u.com/images/landing/alexa.png',
    heading: 'Alexa Radio Skill',
    content: 'Add your radio stream to Alexa',
    btn: 'Start Now',
    link: '/link',
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

const StyledButton = styled(Button)`
  margin-top: ${theme.spacing(4)}px;
  padding: 0 ${theme.spacing(4)}px;

  .MuiButton-label {
    font-size: 18px;
    font-weight: 700;
    line-height: 3;
  }
`;

const Home = () => {
  return (
    <>
      <FullContainer center maxWidth="xl">
        <Text component="h1" variant="h2" px={2} fontWeight={700} align="center" gutterBottom>
          Create Your Own Internet Radio Station
        </Text>
        <StyledButton
          component={Link}
          to="/asdasd"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<RocketIcon />}
        >
          Start Now
        </StyledButton>
      </FullContainer>
      <FullContainer maxWidth="xl">
        {sections.map(({ img, heading, content, btn, link }, i) => (
          <React.Fragment key={i}>
            <RowSection
              img={img}
              heading={heading}
              content={content}
              btn={btn}
              link={link}
              reverse={i % 2 === 1}
            />
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