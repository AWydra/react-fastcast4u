// @ts-nocheck
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import history from 'utils/history';

const Home = () => {
  const content = useSelector(state => state.language.home);

  const heroData = useMemo(
    () => ({
      heading: content.heroSection.heading,
      pictures: {
        mobile: 'https://img.fastcast4u.com/react/home/home-bg-mobile',
        desktop: 'https://img.fastcast4u.com/react/home/home-bg',
        alt: 'Alexa on a desk',
      },
      buttons: [
        {
          label: content.heroSection.buttons[0],
          onClick: () => history.push('/alexa-skill'),
          color: 'secondary',
        },
      ],
    }),
    [content],
  );

  const sections = useMemo(
    () => [
      {
        img: 'https://img.fastcast4u.com/react/home/device1',
        heading: content.rowSections[0].heading,
        content: content.rowSections[0].content,
        button: {
          label: content.rowSections[0].button,
          to: '/order',
        },
      },
      {
        img: 'https://img.fastcast4u.com/react/home/IPadIP',
        heading: content.rowSections[1].heading,
        content: content.rowSections[1].content,
        button: {
          label: content.rowSections[1].button,
          to: '/order',
        },
      },
      {
        img: 'https://img.fastcast4u.com/react/home/wpdev1',
        heading: content.rowSections[2].heading,
        content: content.rowSections[2].content,
        button: {
          label: content.rowSections[2].button,
          to: '/order',
        },
      },
      {
        img: 'https://img.fastcast4u.com/react/home/alexa',
        heading: content.rowSections[3].heading,
        content: content.rowSections[3].content,
        button: {
          label: content.rowSections[3].button,
          to: '/alexa-skill',
        },
      },
    ],
    [content],
  );

  const accordion = useMemo(
    () =>
      content.faq.accordions.map(accordion => ({
        heading: accordion.heading,
        content: accordion.content,
      })),
    [content],
  );

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
          {content.faq.title}
        </Text>
        <Accordion data={accordion} />
      </Container>
    </>
  );
};

export default Home;
