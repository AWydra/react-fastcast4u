// @ts-nocheck
import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cmsActions from 'actions/cmsActions';
import { useLocation } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import generalServices from 'services/general';
import cmsServices from 'services/cms';

import { Divider, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import YTContainer from 'components/atoms/YTContainer/YTContainer';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import RowSection from 'components/organisms/RowSection/RowSection';
import ItemsLeftBar from 'components/organisms/ItemsLeftBar/ItemsLeftBar';
import PricingBlock from 'components/organisms/PricingBlock/PricingBlock';
import { handleExternal } from 'utils/urls';

const useStyles = makeStyles({
  hero: {
    backgroundColor: 'black',
  },
});

const SocialLiveStreaming = () => {
  const location = useLocation();
  const [promocode, setPromocode] = useState(null);
  const [price, setPrice] = useState(null);
  const hero = useSelector(state => state.cms.sls.hero);
  const bar = useSelector(state => state.cms.sls.bar);
  const content = useSelector(state => state.language.sls);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const urlPromocode = new URLSearchParams(location.search).get('promo');

    !hero.title &&
      cmsServices.getSLSData().then(res => {
        dispatch(cmsActions.setSLSData(res));
        setPromocode(urlPromocode || res.promocode);
      });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (promocode === null) return;
    generalServices.getPrice({ pid: 529, promocode }).then(res =>
      setPrice({
        current: res.current,
        old: 49,
      }),
    );
  }, [promocode]);

  const heroData = useMemo(
    () => ({
      heading: hero.title,
      content: hero.content,
      pictures: {
        mobile: 'https://img.fastcast4u.com/flash/flashpromo',
        alt: 'Microphone on a desk',
      },
      buttons: hero.buttons.map(button => ({
        label: button.Button,
        onClick: () => handleExternal(button.To),
        color: 'primary',
      })),
    }),
    [hero],
  );

  const sectionsData = useMemo(
    () => [
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
        heading: content.sections[0].heading,
        content: content.sections[0].content,
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
        heading: content.sections[1].heading,
        content: content.sections[1].content,
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
        heading: content.sections[2].heading,
        content: content.sections[2].content,
      },
    ],
    [content],
  );

  const pricingData = useMemo(
    () => ({
      price,
      button: {
        component: 'a',
        href: `https://fastcast4u.com/account/cart.php?a=add&pid=529&billingcycle=monthly&skipconfig=1&promocode=${promocode}`,
      },
      ...content.pricing,
    }),
    [price, promocode],
  );

  return (
    <>
      <HeroSection left={hero.left || false} className={classes.hero} data={heroData} />
      <FullContainer maxWidth="xl">
        {sectionsData.map((props, i) => (
          <Fragment key={i}>
            <RowSection long {...props} reverse={i % 2 === 0} />
            {i + 1 < sectionsData.length && <Divider variant="middle" />}
          </Fragment>
        ))}
      </FullContainer>
      {bar.isActive && (
        <ItemsLeftBar
          primary={bar.content}
          promocode={bar.promocode}
          button={
            bar.buttonEnabled && {
              label: bar.button,
              to: bar.to,
            }
          }
        />
      )}
      <PricingBlock data={pricingData} showNew />
    </>
  );
};

export default SocialLiveStreaming;
