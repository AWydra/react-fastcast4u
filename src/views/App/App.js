import React, { Fragment, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Link } from '@material-ui/core';

import FullContainer from 'components/atoms/FullContainer/FullContainer';
import Icon from 'components/atoms/Icon/Icon';
import Text from 'components/atoms/Text/Text';

import PackageBox from 'components/molecules/PackageBox/Base';

import TitleSection from 'components/organisms/TitleSection/TitleSection';
import RowSection from 'components/organisms/RowSection/RowSection';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import PricingTable from 'components/organisms/PricingTable/PricingTable';
import Promobar from 'components/organisms/Promobar/Promobar';
import PhoneSection from 'components/organisms/PhoneSection/PhoneSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import AppDownloadSection from 'components/organisms/AppDownloadSection/AppDownloadSection';

import PackageGrid from 'templates/PackageGrid';
import PricingGrid from 'templates/PricingGrid';
import { isOlderThan } from 'utils/date';
import { useCurrentLanguage } from 'utils/customHooks';

import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from 'assets/svg/AppleIcon';

const specificationRef = React.createRef();

const App = () => {
  const content = useSelector(state => state.language.app);
  const lng = useCurrentLanguage();

  const heroData = useMemo(
    () => ({
      heading: content.hero.heading,
      pictures: {
        mobile: 'https://img.fastcast4u.com/react/app/app-bg-mobile',
        desktop: 'https://img.fastcast4u.com/react/app/app-bg',
        alt: 'Phone in a hand',
      },
      buttons: [
        {
          color: 'primary',
          label: content.hero.buttons[0],
          component: 'a',
          href: 'https://billing.fastcast4u.com/link.php?id=873',
          target: '_blank',
        },
      ],
      youtube: {
        label: content.hero.buttons[1],
        url: 'https://www.youtube-nocookie.com/embed/NkfmJ2lPXIc',
      },
    }),
    [content],
  );

  const sectionsData = useMemo(
    () => [
      {
        img: 'https://img.fastcast4u.com/react/app/phon2',
        heading: content.sections[0].heading,
        content: content.sections[0].content,
      },
      {
        img: 'https://img.fastcast4u.com/react/app/app-creator',
        heading: content.sections[1].heading,
        content: content.sections[1].content,
        button: {
          label: content.sections[1].label,
          component: 'a',
          href: 'https://billing.fastcast4u.com/link.php?id=873',
          target: '_blank',
        },
      },
    ],
    [content],
  );

  const pricingData = useMemo(
    () => [
      {
        title: content.pricing[0].title,
        price: isOlderThan(Date.UTC(2020, 6, 31, 24)) ? 89.4 : 74.5,
        oldPrice: 149,
        list: content.pricing[0].list,
        image: 'https://img.fastcast4u.com/react/app/android.png',
        link: `https://billing.fastcast4u.com/cart.php?a=add&pid=496&promocode=summer${
          isOlderThan(Date.UTC(2020, 6, 31, 24)) ? 4 : 5
        }0`,
      },
      {
        title: content.pricing[1].title,
        price: isOlderThan(Date.UTC(2020, 6, 31, 24)) ? 119.4 : 99.5,
        oldPrice: 199,
        list: content.pricing[1].list,
        image: 'https://img.fastcast4u.com/react/app/IP&android.png',
        link: `https://billing.fastcast4u.com/cart.php?a=add&pid=498&promocode=summer${
          isOlderThan(Date.UTC(2020, 6, 31, 24)) ? 4 : 5
        }0`,
        best: true,
      },
      {
        title: content.pricing[2].title,
        price: isOlderThan(Date.UTC(2020, 6, 31, 24)) ? 89.4 : 74.5,
        oldPrice: 149,
        list: content.pricing[2].list,
        image: 'https://img.fastcast4u.com/react/app/IP.png',
        link: `https://billing.fastcast4u.com/cart.php?a=add&pid=497&promocode=summer${
          isOlderThan(Date.UTC(2020, 6, 31, 24)) ? 4 : 5
        }0`,
      },
    ],
    [content],
  );

  const promobarData = useMemo(
    () => ({
      primary: content.promobar.primary,
      button: { label: content.promobar.label, to: `${lng}/order` },
    }),
    [content, lng],
  );

  const deliveryAccordionsData = useMemo(
    () => [
      {
        heading: content.delivery.data[0].heading,
        content: (
          <>
            <Text>
              <Icon>
                <AndroidIcon fontSize="small" />
              </Icon>
              {content.delivery.data[0].content[0]}{' '}
              <Link href="//play.google.com/apps/publish/signup/" target="_blank">
                Google Play
              </Link>{' '}
              {content.delivery.data[0].content[1]}
            </Text>
            <Text>
              <Icon>
                <AppleIcon fontSize="small" />
              </Icon>
              {content.delivery.data[0].content[2]}{' '}
              <Link href="//developer.apple.com/programs/enroll/" target="_blank">
                {content.delivery.data[0].content[3]}
              </Link>{' '}
              {content.delivery.data[0].content[4]}
            </Text>
          </>
        ),
      },
      {
        heading: content.delivery.data[1].heading,
        content: content.delivery.data[1].content,
      },
      {
        heading: content.delivery.data[2].heading,
        content: (
          <>
            <Text>
              <Icon>
                <AndroidIcon fontSize="small" />
              </Icon>
              {content.delivery.data[2].content[0]}
            </Text>
            <Text>
              <Icon>
                <AppleIcon fontSize="small" />
              </Icon>
              {content.delivery.data[2].content[1]}
            </Text>
          </>
        ),
      },
    ],
    [content],
  );

  const packageData = useMemo(
    () => [
      {
        data: {
          id: '1',
          name: content.package[0].name,
          description: content.package[0].description,
        },
        cycle: content.package[0].cycle,
        price: 10,
      },
      {
        data: {
          id: '2',
          name: content.package[1].name,
          description: content.package[1].description,
        },
        cycle: content.package[1].cycle,
        price: 20,
      },
    ],
    [content],
  );

  return (
    <>
      <HeroSection left data={heroData} youtube={heroData.youtube} />
      <FullContainer maxWidth="xl" overflowHidden>
        {sectionsData.map((props, i) => (
          <Fragment key={i}>
            <RowSection long {...props} reverse={i % 2 === 0} />
            {i + 1 < sectionsData.length && <Divider variant="middle" />}
          </Fragment>
        ))}
      </FullContainer>
      <TitleSection>
        <PhoneSection data={content.slider} />
      </TitleSection>
      <PricingGrid>
        {pricingData.map((props, i) => (
          <PricingTable key={i} {...props} />
        ))}
      </PricingGrid>
      <Promobar {...promobarData} />
      <TitleSection primary={content.delivery.primary}>
        <Accordion data={deliveryAccordionsData} />
      </TitleSection>
      <TitleSection primary="Additional Features">
        <PackageGrid>
          {packageData.map(({ data, cycle, price }) => (
            <PackageBox
              key={data.id}
              data={data}
              cycle={cycle}
              priceProp={price}
              priceBasicProp={price}
              showPrice
              hideCheckbox
              disabled
            />
          ))}
        </PackageGrid>
      </TitleSection>
      <TitleSection
        primary="Product Specifications"
        secondary="Features available for your Application"
        innerRef={specificationRef}
      >
        <Accordion data={content.specification} />
      </TitleSection>
      <AppDownloadSection
        heading={content.download.heading}
        googlePlay="https://billing.fastcast4u.com/link.php?id=851"
        appleStore="https://billing.fastcast4u.com/link.php?id=850"
      />
    </>
  );
};

export default App;
