// @ts-nocheck
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ItemsLeftBar from 'components/organisms/ItemsLeftBar/ItemsLeftBar';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import RowSection from 'components/organisms/RowSection/RowSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import history from 'utils/history';
import { isNowBetween } from 'utils/date';
import { useCurrentLanguage } from 'utils/customHooks';

const Home = () => {
  const content = useSelector(state => state.language.home);
  const lng = useCurrentLanguage();
  // const currency = useSelector(state => state.general.currency);

  const heroData = useMemo(
    () =>
      isNowBetween(Date.UTC(2020, 8, 28, 7), Date.UTC(2020, 8, 29, 7))
        ? {
            heading: (
              <>
                <Text component="span" variant="h3">
                  New Unlimited Radio Server Package
                </Text>
                <Text display="block" component="span" variant="h2" mt={2}>
                  50% OFF
                </Text>
                <Text display="block" component="span" variant="h4" mt={2}>
                  billed annually and biennially
                </Text>
              </>
            ),
            pictures: {
              mobile: 'https://img.fastcast4u.com/flash/flashpromo',
              alt: 'Alexa on a desk',
            },
            buttons: [
              {
                label: 'Start now',
                onClick: () => history.push(`${lng}/order`),
                color: 'secondary',
              },
            ],
          }
        : {
            heading: 'Social Media Live Streaming',
            content: 'Start Streaming Live to Facebook, YouTube and Twitter',
            pictures: {
              mobile: 'https://img.fastcast4u.com/flash/flashpromo',
              alt: 'Microphone on a desk',
            },
            buttons: [
              {
                label: '\xa0START NOW\xa0',
                onClick: () => history.push(`${lng}/social-live-streaming`),
                color: 'secondary',
              },
            ],
          },
    // eslint-disable-next-line
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
      <HeroSection left data={heroData} />
      {isNowBetween(Date.UTC(2020, 8, 28, 7), Date.UTC(2020, 8, 29, 7)) && (
        <ItemsLeftBar
          primary="LIMITED SUPPLY: {items} items left in stock"
          promocode="flashsalebill"
          button={{
            label: 'Start Now',
            to: '/order',
          }}
        />
      )}
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
