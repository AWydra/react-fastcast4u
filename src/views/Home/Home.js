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
import { isOlderThan } from 'utils/date';
import { useCurrentLanguage } from 'utils/customHooks';

const Home = () => {
  const content = useSelector(state => state.language.home);
  const lng = useCurrentLanguage();

  const heroData = useMemo(
    () => ({
      heading: (
        <>
          <Text
            component="span"
            variant="h1"
            style={{ textShadow: 'black 0px 0px 2px, black 0px 0px 7px' }}
          >
            Summer Sale
          </Text>
          <Text
            display="block"
            component="span"
            variant="h3"
            mt={2}
            style={{ textShadow: 'black 0px 0px 2px, black 0px 0px 7px' }}
          >
            EVERYTHING {isOlderThan(Date.UTC(2020, 7, 13, 24)) ? 2 : 3}0% OFF
          </Text>
        </>
      ),
      pictures: {
        mobile: 'https://img.fastcast4u.com/react/home/promo/summer',
        alt: 'Summer promo',
      },
      buttons: [
        {
          label: content.heroSection.buttons[0],
          onClick: () => history.push(`${lng}/order`),
          color: 'secondary',
        },
      ],
    }),
    [content, lng],
  );

  const sections = useMemo(
    () => [
      {
        img: 'https://img.fastcast4u.com/react/home/promo/icecreams',
        heading: 'Discounts melt every day!',
        content: 'Grab the Best Summer Deal while they last!',
        button: {
          label: 'Buy Now',
          to: '/order',
        },
      },
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
      // {
      //   img: 'https://img.fastcast4u.com/react/home/wpdev1',
      //   heading: content.rowSections[2].heading,
      //   content: content.rowSections[2].content,
      //   button: {
      //     label: content.rowSections[2].button,
      //     to: `${lng}/order`,
      //   },
      // },
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
      <HeroSection left data={heroData} />
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
