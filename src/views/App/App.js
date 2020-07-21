import React, { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
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
import {
  specificationRef,
  heroData,
  sectionsData,
  pricingData,
  promobarData,
  deliveryAccordionsData,
  packageData,
  specificationAccordionsData,
  sliderData,
  appDownloadData,
} from './data';

const App = () => {
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
        <PhoneSection data={sliderData} />
      </TitleSection>
      <PricingGrid>
        {pricingData.map((props, i) => (
          <PricingTable key={i} {...props} />
        ))}
      </PricingGrid>
      <Promobar {...promobarData} />
      <TitleSection primary="App Delivery and Hosting">
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
        <Accordion data={specificationAccordionsData} />
      </TitleSection>
      <AppDownloadSection {...appDownloadData} />
    </>
  );
};

export default App;
