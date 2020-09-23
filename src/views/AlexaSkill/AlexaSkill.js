/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import generalServices from 'services/general';
import { Container, Divider, Link } from '@material-ui/core';
import { AddCircle, PlayCircleFilled, Help } from '@material-ui/icons';

import FullContainer from 'components/atoms/FullContainer/FullContainer';
import Text from 'components/atoms/Text/Text';
import Cite from 'components/atoms/Cite/Cite';
import YTContainer from 'components/atoms/YTContainer/YTContainer';

import RowSection from 'components/organisms/RowSection/RowSection';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import FeatureSection from 'components/organisms/FeatureSection/FeatureSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import PricingBlock from 'components/organisms/PricingBlock/PricingBlock';
import ItemsLeftBar from 'components/organisms/ItemsLeftBar/ItemsLeftBar';
import { isNowBetween } from 'utils/date';

const infoRef = React.createRef();
const buyRef = React.createRef();

const AlexaSkill = () => {
  const [promocode, setPromocode] = useState(null);
  const content = useSelector(state => state.language.alexa);
  const [price, setPrice] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const urlPromocode = new URLSearchParams(location.search).get('promo');
    const promocode = isNowBetween(Date.UTC(2020, 8, 20, 7), Date.UTC(2020, 8, 22, 7))
      ? 'flashalexa29'
      : 'alexasept';
    setPromocode(urlPromocode || promocode);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (promocode === null) return;
    generalServices.getPrice({ pid: 523, promocode }).then(res =>
      setPrice({
        current: res.current,
        old: res.regular,
      }),
    );
  }, [promocode]);

  const heroData = useMemo(
    () => ({
      heading: content.hero.heading,
      pictures: {
        mobile: 'https://img.fastcast4u.com/react/alexa/alexa-bg-mobile',
        desktop: 'https://img.fastcast4u.com/react/alexa/alexa-bg',
        alt: 'Alexa on a desk',
      },
      buttons: [
        {
          label: `\xa0${content.hero.buttons[0]}\xa0`,
          onClick: () => infoRef.current.scrollIntoView({ behavior: 'smooth' }),
          color: 'primary',
        },
        {
          label: content.hero.buttons[1],
          color: 'secondary',
          component: 'a',
          href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
          target: '_blank',
        },
      ],
    }),
    [content],
  );

  const sectionsData = useMemo(
    () => [
      {
        img: 'https://img.fastcast4u.com/react/alexa/alexa-front',
        heading: content.sections[0].heading,
        content: content.sections[0].content,
        button: {
          label: content.sections[0].label,
          href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
        },
      },
      {
        img: (
          <LazyLoadComponent>
            <YTContainer>
              <iframe
                title="alexa-movie"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9EGLwIQ4CYI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </YTContainer>
          </LazyLoadComponent>
        ),
        heading: content.sections[1].heading,
        content: content.sections[1].content,
        button: {
          label: content.sections[1].label,
          onClick: () => {
            buyRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          },
        },
      },
    ],
    [content],
  );

  const featureData = useMemo(
    () => ({
      heading: content.feature.heading,
      img: 'https://fastcast4u.com/images/landing/alexa.png',
      list: [
        {
          icon: <AddCircle />,
          primary: <Cite>{'Alexa, enable {Your Radio Name}'}</Cite>,
          secondary: content.feature.list[0],
        },
        {
          icon: <PlayCircleFilled />,
          primary: <Cite>{'Alexa, launch {Your Radio Name}'}</Cite>,
          secondary: content.feature.list[1],
        },
        {
          icon: <Help />,
          primary: <Cite>{'Alexa, ask {Your Radio Name}, '}title please?</Cite>,
          secondary: content.feature.list[2],
        },
      ],
    }),
    [content],
  );

  const pricingData = useMemo(
    () => ({
      heading: content.pricing.heading,
      list: content.pricing.list,
      price,
      cycle: content.pricing.cycle,
      button: {
        label: content.pricing.label,
        component: 'a',
        href: `https://fastcast4u.com/account/cart.php?a=add&pid=523&promocode=${promocode}`,
      },
    }),
    // eslint-disable-next-line
    [content, price],
  );

  const accordionsData = useMemo(
    () => [
      {
        ...content.accordions[0],
      },
      {
        ...content.accordions[1],
      },
      {
        heading: content.accordions[2].heading,
        content: (
          <>
            <Text>{content.accordions[2].content[0]}</Text>
            <Text mt={1}>
              {content.accordions[2].content[1]}{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://developer.amazon.com/en-US/docs/alexa/custom-skills/choose-the-invocation-name-for-a-custom-skill.html"
              >
                {content.accordions[2].content[2]}
              </Link>
            </Text>
          </>
        ),
      },
      {
        ...content.accordions[3],
      },
      {
        heading: 'Functionalities and voice commands',
        content: (
          <>
            <Text component="h6" variant="h6">
              {content.accordions[4].content[0]}
            </Text>
            <Text mt={0.5} mb={2.5}>
              {
                'Alexa, play {Radio Name}, Alexa, launch {Radio Name}, Alexa, open {Radio Name}, Alexa, load {Radio Name} or Alexa, start {Radio Name}.'
              }
            </Text>
            <Text component="h6" variant="h6">
              {content.accordions[4].content[1]}
            </Text>
            <Text mt={0.5}>
              {
                'ask {Radio Name} what is current title, ask {Radio Name} title, or ask {Radio Name} please title.'
              }
            </Text>
          </>
        ),
      },
    ],
    [content],
  );

  return (
    <>
      <HeroSection data={heroData} />
      <FullContainer maxWidth="xl" overflowHidden innerRef={infoRef}>
        {sectionsData.map((props, i) => (
          <Fragment key={i}>
            <RowSection long {...props} reverse={i % 2 === 0} />
            {i + 1 < sectionsData.length && <Divider variant="middle" />}
          </Fragment>
        ))}
      </FullContainer>
      <FeatureSection data={featureData} />
      <PricingBlock data={pricingData} innerRef={buyRef} showNew />
      {isNowBetween(Date.UTC(2020, 8, 20, 7), Date.UTC(2020, 8, 22, 7)) && (
        <ItemsLeftBar
          primary="LIMITED SUPPLY: {items} items left in stock"
          promocode="flashalexa29"
        />
      )}
      <Container maxWidth="xl">
        <Text component="h2" variant="h4" mt={4} mb={6} align="center" fontWeight={500}>
          Frequently Asked Questions
        </Text>
        <Accordion data={accordionsData} />
      </Container>
    </>
  );
};

export default AlexaSkill;
