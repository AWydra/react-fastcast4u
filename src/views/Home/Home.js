// @ts-nocheck
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import MarqueeBar from 'components/molecules/MarqueeBar/MarqueeBar';
import ItemsLeftBar from 'components/molecules/ItemsLeftBar/ItemsLeftBar';
import RowSection from 'components/organisms/RowSection/RowSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import history from 'utils/history';
import { isNowBetween } from 'utils/date';
import { useCurrentLanguage } from 'utils/customHooks';

const Home = () => {
  const content = useSelector(state => state.language.home);
  const currency = useSelector(state => state.general.currency);
  const lng = useCurrentLanguage();

  const heroData = useMemo(
    () =>
      isNowBetween(Date.UTC(2020, 8, 7, 7), Date.UTC(2020, 8, 8, 7))
        ? {
            heading: (
              <>
                <Text component="span" variant="h2">
                  Alexa Radio Skill Package
                </Text>
                <Text display="block" component="span" variant="h3" mt={2}>
                  Only {currency}29 <small>one-time</small>
                </Text>
              </>
            ),
            pictures: {
              mobile: 'https://img.fastcast4u.com/react/home/home-bg-mobile',
              desktop: 'https://img.fastcast4u.com/react/home/home-bg',
              alt: 'Alexa on a desk',
            },
            buttons: [
              {
                label: content.heroSection.buttons[0],
                onClick: () => history.push(`${lng}/alexa-skill`),
                color: 'secondary',
              },
            ],
          }
        : {
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
          },
    [content, lng],
  );

  const sections = useMemo(
    () => [
      {
        img: 'https://img.fastcast4u.com/react/home/device1',
        heading: content.rowSections[0].heading,
        content: content.rowSections[0].content,
        button: {
          label: content.rowSections[0].button,
          to: `${lng}/order`,
        },
      },
      {
        img: 'https://img.fastcast4u.com/react/app/phon2',
        heading: content.rowSections[1].heading,
        content: content.rowSections[1].content,
        button: {
          label: content.rowSections[1].button,
          to: `${lng}/app`,
        },
      },
      {
        img: 'https://img.fastcast4u.com/react/home/wpdev1',
        heading: content.rowSections[2].heading,
        content: content.rowSections[2].content,
        button: {
          label: content.rowSections[2].button,
          to: `${lng}/order`,
        },
      },
      {
        img: 'https://img.fastcast4u.com/react/home/alexa',
        heading: content.rowSections[3].heading,
        content: content.rowSections[3].content,
        button: {
          label: content.rowSections[3].button,
          to: `${lng}/alexa-skill`,
        },
      },
    ],
    [content, lng],
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
      {isNowBetween(Date.UTC(2020, 8, 7, 7), Date.UTC(2020, 8, 8, 7)) && <MarqueeBar />}
      <HeroSection left data={heroData} />
      {isNowBetween(Date.UTC(2020, 8, 7, 7), Date.UTC(2020, 8, 8, 7)) && <ItemsLeftBar />}
      <FullContainer maxWidth="xl" overflowHidden>
        {sections.map((props, i) => (
          <React.Fragment key={i}>
            <RowSection {...props} long reverse={i % 2 === 0} />
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
