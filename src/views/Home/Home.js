// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Divider } from '@material-ui/core';
import Text from 'components/atoms/Text';
import RocketIcon from 'assets/svg/RocketIcon';
import FullContainer from 'components/atoms/FullContainer';
import RowSection from 'components/organisms/RowSection';
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
          <>
            <RowSection
              key={i}
              img={img}
              heading={heading}
              content={content}
              btn={btn}
              link={link}
              reverse={i % 2 === 1}
            />
            {i + 1 < sections.length && <Divider variant="middle" />}
          </>
        ))}
      </FullContainer>
    </>
  );
};

export default Home;
