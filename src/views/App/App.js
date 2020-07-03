import React, { Fragment } from 'react';
import { Divider, Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import { heroData, sectionsData, deliveryAccordionsData } from './data';

const App = () => {
  return (
    <>
      <HeroSection left data={heroData} />
      <FullContainer maxWidth="xl" overflowHidden>
        {sectionsData.map((props, i) => (
          <Fragment key={i}>
            <RowSection {...props} reverse={i % 2 === 1} />
            {i + 1 < sectionsData.length && <Divider variant="middle" />}
          </Fragment>
        ))}
      </FullContainer>
      <Container maxWidth="xl">
        <Text component="h2" variant="h4" mt={4} mb={6} align="center" fontWeight={500}>
          App Delivery and Hosting
        </Text>
        <Accordion data={deliveryAccordionsData} />
      </Container>
    </>
  );
};

export default App;
