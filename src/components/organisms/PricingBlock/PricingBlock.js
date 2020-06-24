import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(2),
  },
  desc: {
    padding: theme.spacing(3),
  },
  heading: {
    paddingBottom: theme.spacing(2),
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  listContainer: {
    marginTop: theme.spacing(2),
  },
  list: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(1, 0),
    },
  },
  pricing: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeft: 'solid 1px',
    borderColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[800]),
    backgroundColor: modeSwitch(theme.palette.grey[100], theme.palette.grey[900]),
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'unset',
      borderTop: 'solid 1px',
      borderColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[800]),
    },
  },
  price: {
    lineHeight: 1.2,
  },
  priceUnit: {
    verticalAlign: 'super',
  },
}));

const PricingBlock = () => {
  const classes = useStyles();
  const currency = useSelector(state => state.general.currency);

  return (
    <Container className={classes.container} maxWidth="xl">
      <Paper variant="outlined" elevation={20}>
        <Grid container>
          <Grid className={classes.desc} item xs={12} md={9}>
            <Text className={classes.heading} component="h3" variant="h5">
              How many Themes can you Download today?
            </Text>
            <Divider />
            <Grid component={List} container className={classes.listContainer}>
              <Grid component={ListItem} className={classes.listItem} item xs={12} md={6}>
                <ListItemText primary="Your custom invitation name" />
              </Grid>
              <Grid component={ListItem} className={classes.listItem} item xs={12} md={6}>
                <ListItemText primary="Start/play/launch radio stream" />
              </Grid>
              <Grid component={ListItem} className={classes.listItem} item xs={12} md={6}>
                <ListItemText primary="The current title information" />
              </Grid>
              <Grid component={ListItem} className={classes.listItem} item xs={12} md={6}>
                <ListItemText primary="Publication on Amazon Store included" />
              </Grid>
              <Grid component={ListItem} className={classes.listItem} item xs={12}>
                <Text variant="body1">
                  Supported languages: English, Spanish, French, Italian, German, Portuguese, Hindi
                  and Japanese
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} className={classes.pricing}>
            <Text fontSize={64} className={classes.price}>
              <Text className={classes.priceUnit} component="span" fontSize={32}>
                {currency}
              </Text>
              60
            </Text>
            <Text mb={1.5} color="textSecondary">
              MONTHLY
            </Text>
            <CTAButton color="primary" xlarge variant="contained">
              get started
            </CTAButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PricingBlock;
