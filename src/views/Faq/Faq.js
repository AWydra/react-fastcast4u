import React, { useState } from 'react';
import { Box, Paper, Tabs, Tab, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import Accordion from 'components/organisms/Accordion/Accordion';

const data = [
  {
    heading: 'How to get started?',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'Do you assist with configuration of live broadcasting software on my PC/Mac?',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'Do I need a royalties / music licence to broadcast online?',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'Do you offer any live broadcasting software or only servers?',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'How can I listen to my station?',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'How can I contact FastCast4u Support?',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'Can I stream online wihout any live broadcasting software?',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'Panel Introduction - General Overview',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  tabs: {
    marginRight: theme.spacing(3),
    boxShadow: theme.shadows[3],
  },
  tab: {
    textTransform: 'capitalize',
  },
  accordionContainer: {
    flex: 1,
  },
}));

const Faq = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock
        title="Frequently Asked Questions"
        subtitle="We're always super happy to answer all your questions about our services, but you can also check for an answer there..."
        component="h1"
      />
      <Box className={classes.container}>
        <Paper variant="outlined" className={classes.tabs}>
          <Tabs
            orientation="vertical"
            value={tabValue}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            indicatorColor="primary"
          >
            <Tab className={classes.tab} label="Getting Started" />
            <Tab className={classes.tab} label="Broadcasting Live" />
            <Tab className={classes.tab} label="AutoDJ Stream Automation" />
            <Tab className={classes.tab} label="WebPlayer Page & Radio Player" />
            <Tab className={classes.tab} label="Mobile Apps" />
            <Tab className={classes.tab} label="Payments" />
          </Tabs>
        </Paper>
        <Box className={classes.accordionContainer}>
          <Accordion
            data={data}
            summaryProps={{
              variant: 'subtitle1',
              fontWeight: 500,
              lineHeight: 1,
            }}
          />
        </Box>
      </Box>
    </FullContainer>
  );
};

export default Faq;
