import React from 'react';
import { useSelector } from 'react-redux';
import {
  Chip,
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
    marginBottom: theme.spacing(10),
    paddingTop: theme.spacing(4),
  },
  paper: {
    boxShadow: theme.shadows[6],
  },
  desc: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  listContainer: {
    marginTop: theme.spacing(2),
    padding: 0,
    flexGrow: 1,
  },
  list: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  listItem: {
    padding: 0,
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
    position: 'relative',
    borderLeft: 'solid 1px',
    borderColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[800]),
    backgroundColor: modeSwitch(theme.palette.grey[100], theme.palette.grey[900]),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'unset',
      borderTop: 'solid 1px',
      borderColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[800]),
    },
  },
  chip: {
    height: 'auto',
    padding: theme.spacing(1, 7),
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(-6),
    backgroundColor: theme.palette.error.main,
    fontWeight: 600,
    letterSpacing: 1,
    transform: 'rotate(35deg)',
    borderRadius: 0,
  },
  price: {
    lineHeight: 1.2,
  },
  priceUnit: {
    verticalAlign: 'super',
  },
}));

const PricingBlock = ({ ...props }) => {
  const classes = useStyles();
  const currency = useSelector(state => state.general.currency);

  return (
    <Container className={classes.container} maxWidth="xl" {...props}>
      <Paper className={classes.paper} variant="outlined" elevation={20}>
        <Grid container>
          <Grid className={classes.desc} item xs={12} md={9}>
            <Text className={classes.heading} component="h3" variant="h5">
              Alexa Skill Package
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
              <Grid component={ListItem} className={classes.listItem} item xs={12} md={6}>
                <ListItemText primary="Multilingual support" />
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
              ONE-TIME
            </Text>
            <CTAButton
              color="primary"
              xlarge
              variant="contained"
              component="a"
              href="https://fastcast4u.com/account/cart.php?a=add&pid=523"
            >
              get now
            </CTAButton>
            <Chip className={classes.chip} label="NEW" color="secondary" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PricingBlock;
