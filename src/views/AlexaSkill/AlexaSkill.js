import React, { Fragment } from 'react';
import { Container, Divider } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import FeatureSection from 'components/organisms/FeatureSection/FeatureSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import PricingBlock from 'components/organisms/PricingBlock/PricingBlock';
import Text from 'components/atoms/Text/Text';
import {
  infoRef,
  buyRef,
  heroData,
  sectionsData,
  featureData,
  pricingData,
  accordionsData,
} from './data';

const AlexaSkill = () => {
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
      <PricingBlock data={pricingData} innerRef={buyRef} />
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
