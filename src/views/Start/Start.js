import React from 'react';
import StartRoutes from 'routes/startRoutes';
import { Container } from '@material-ui/core';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import StartTabs from 'components/molecules/StartTabs/StartTabs';

const Start = () => {
  return (
    <>
      <Container maxWidth="xl">
        <HeadingBlock
          title="Create Your Own Internet Radio Station"
          subtitle="Start broadcasting online with a complete Radio Station Server Package."
        />
        <StartTabs />
      </Container>
      <StartRoutes />
    </>
  );
};

export default Start;
