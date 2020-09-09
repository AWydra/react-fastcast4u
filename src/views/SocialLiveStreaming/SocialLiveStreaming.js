import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import generalServices from 'services/general';

import { Divider, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import YTContainer from 'components/atoms/YTContainer/YTContainer';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import RowSection from 'components/organisms/RowSection/RowSection';
import PricingBlock from 'components/organisms/PricingBlock/PricingBlock';

const useStyles = makeStyles({
  hero: {
    backgroundColor: 'black',
  },
});

const heroData = {
  heading: 'Social Media Live Streaming',
  content: 'Reach new audience by sharing your Radio Stream in the top social media channels',
  pictures: {
    mobile: 'https://img.fastcast4u.com/react/alexa/alexa-bg-mobile',
    desktop: 'https://img.fastcast4u.com/react/alexa/alexa-bg',
    alt: 'Alexa on a desk',
  },
};

const sectionsData = [
  {
    img: (
      <LazyLoadComponent>
        <YTContainer>
          <iframe
            title="alexa-movie"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_L2wmoWztAc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YTContainer>
      </LazyLoadComponent>
    ),
    heading: 'Facebook Live Streaming',
    content:
      'Make your Online Radio Stream available on your Facebook Fanpage, private account or groups.',
  },
  {
    img: (
      <LazyLoadComponent>
        <YTContainer>
          <iframe
            title="alexa-movie"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0VqeyGGfUu0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YTContainer>
      </LazyLoadComponent>
    ),
    heading: 'YouTube Live Streaming',
    content: 'Set up a Radio Live Stream to YouTube and get even more listeners!',
  },
  {
    img: (
      <LazyLoadComponent>
        <YTContainer>
          <iframe
            title="alexa-movie"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-vRHhcM9NR4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YTContainer>
      </LazyLoadComponent>
    ),
    heading: 'Twitter Live Streaming',
    content: 'Re-broadcast your Radio Stream on Twitter though Pericope',
  },
];

const SocialLiveStreaming = () => {
  const location = useLocation();
  const [promocode, setPromocode] = useState('');
  const [price, setPrice] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const urlPromocode = new URLSearchParams(location.search).get('promo');
    setPromocode(urlPromocode || 'livenow');

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!promocode) return;
    generalServices.getPrice({ pid: 529, promocode }).then(res =>
      setPrice({
        current: res.current,
        old: res.regular,
      }),
    );
  }, [promocode]);

  const pricingData = useMemo(
    () => ({
      heading: 'Social Media Live Streaming Package ',
      list: [
        'Facebook Live Streaming',
        'Custom Cover Video Clip or Image',
        'YouTube Live Streaming',
        'Custom Text and Track info',
        'Twitter Live Streaming though Periscope',
        'Streaming on up to 3 channels simultaneously',
      ],
      price,
      cycle: 'Monthly',
      button: {
        label: 'Get Now',
        component: 'a',
        href: `https://fastcast4u.com/account/cart.php?a=add&pid=529&billingcycle=monthly&promocode=${promocode}`,
      },
    }),
    [price, promocode],
  );

  return (
    <>
      <HeroSection className={classes.hero} data={heroData} />
      <FullContainer maxWidth="xl">
        {sectionsData.map((props, i) => (
          <Fragment key={i}>
            <RowSection long {...props} reverse={i % 2 === 0} />
            {i + 1 < sectionsData.length && <Divider variant="middle" />}
          </Fragment>
        ))}
      </FullContainer>
      <PricingBlock data={pricingData} />
    </>
  );
};

export default SocialLiveStreaming;
