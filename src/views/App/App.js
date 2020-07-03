import React, { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import { heroData, sectionsData } from './data';

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
    </>
  );
};

export default App;
