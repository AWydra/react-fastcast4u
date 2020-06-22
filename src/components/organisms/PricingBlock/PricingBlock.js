import React from 'react';
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

const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  pricing: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeft: 'solid 1px',
    borderColor: theme.palette.grey[300],
    backgroundColor: theme.palette.grey[100],
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'unset',
      borderTop: 'solid 1px',
      borderColor: theme.palette.grey[300],
    },
  },
  priceUnit: {
    verticalAlign: 'super',
  },
}));

const PricingBlock = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Paper variant="outlined" elevation={20}>
        <Grid container>
          <Grid className={classes.desc} item xs={12} md={9}>
            <Text className={classes.heading} component="h3" variant="h5">
              How many Themes can you Download today?
            </Text>
            <Divider />
            <Grid container className={classes.listContainer}>
              <Grid item xs={12} md={6}>
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <ListItemText primary="Ultra Responsive Layouts" />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemText primary="Advanced Admin Panel" />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemText primary="Support for Custom Fonts" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <ListItemText primary="Retina Ready Designs" />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemText primary="Tons of Customization Options" />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemText primary="Premium Sliders Included" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} className={classes.pricing}>
            <Text fontSize={64} lineHeight={1.2}>
              <Text className={classes.priceUnit} component="span" fontSize={32}>
                $
              </Text>
              39
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
