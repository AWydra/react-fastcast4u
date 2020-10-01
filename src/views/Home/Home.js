/* eslint-disable react/no-danger */
// @ts-nocheck
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cmsActions from 'actions/cmsActions';
import cmsServices from 'services/cms';
import { Divider, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ItemsLeftBar from 'components/organisms/ItemsLeftBar/ItemsLeftBar';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import RowSection from 'components/organisms/RowSection/RowSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import { handleExternal } from 'utils/urls';
import { useCurrentLanguage } from 'utils/customHooks';

const Home = () => {
  const content = useSelector(state => state.language.home);
  const hero = useSelector(state => state.cms.home.hero);
  const bar = useSelector(state => state.cms.home.bar);
  const lng = useCurrentLanguage();
  const currency = useSelector(state => state.general.currency);
  const dispatch = useDispatch();

  useEffect(() => {
    !hero.title &&
      cmsServices.getHomeData().then(el => {
        dispatch(cmsActions.setHomeData(el));
      });
  }, [dispatch]);

  const heroData = useMemo(
    () => ({
      heading: (
        <span dangerouslySetInnerHTML={{ __html: hero.title.replace('{currency}', currency) }} />
      ),
      content: hero.content.replace('{currency}', currency),
      pictures: {
        mobile: 'https://img.fastcast4u.com/flash/flashpromo',
        alt: 'Microphone on a desk',
      },
      buttons: hero.buttons.map(button => ({
        label: button.Button,
        onClick: () => handleExternal(button.To, lng),
        color: 'secondary',
      })),
    }),
    // eslint-disable-next-line
    [content, hero, lng],
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
      <HeroSection left={hero.left || false} data={heroData} />
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
