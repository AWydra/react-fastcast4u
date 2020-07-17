import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Paper,
  Tabs,
  Tab,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
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
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  tabs: {
    marginRight: theme.spacing(3),
    boxShadow: theme.shadows[3],
  },
  tab: {
    textTransform: 'capitalize',
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  accordionContainer: {
    flex: 1,
  },
}));

const Faq = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSelectChange = ev => setTabValue(Number(ev.target.value));

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock
        title="Frequently Asked Questions"
        subtitle="We're always super happy to answer all your questions about our services, but you can also check for an answer there..."
        component="h1"
      />
      <Box className={classes.container}>
        {matches ? (
          <Paper variant="outlined" className={classes.tabs}>
            <Tabs
              orientation="vertical"
              value={tabValue}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="primary"
            >
              <Tab value={0} className={classes.tab} label="Getting Started" />
              <Tab value={1} className={classes.tab} label="Broadcasting Live" />
              <Tab value={2} className={classes.tab} label="AutoDJ Stream Automation" />
              <Tab value={3} className={classes.tab} label="WebPlayer Page & Radio Player" />
              <Tab value={4} className={classes.tab} label="Mobile Apps" />
              <Tab value={5} className={classes.tab} label="Payments" />
            </Tabs>
          </Paper>
        ) : (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
            <Select
              native
              value={tabValue}
              onChange={handleSelectChange}
              label="Age"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value={0}>Getting Started</option>
              <option value={1}>Broadcasting Live</option>
              <option value={2}>AutoDJ Stream Automation</option>
              <option value={3}>WebPlayer Page & Radio Player</option>
              <option value={4}>Mobile Apps</option>
              <option value={5}>Payments</option>
            </Select>
          </FormControl>
        )}
        <Box className={classes.accordionContainer}>
          <Accordion
            data={data}
            summaryProps={{
              variant: 'subtitle1',
              fontWeight: 500,
            }}
          />
        </Box>
      </Box>
    </FullContainer>
  );
};

export default Faq;
