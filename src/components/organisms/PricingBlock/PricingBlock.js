import React from 'react';
import PropTypes from 'prop-types';
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
import Skeleton from '@material-ui/lab/Skeleton';
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
    position: 'relative',
    overflow: 'hidden',
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
    borderLeft: 'solid 1px',
    borderColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[800]),
    backgroundColor: modeSwitch(theme.palette.grey[100], theme.palette.grey[900]),
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
    position: 'absolute',
    transform: 'translateX(-100%)',
    verticalAlign: 'super',
  },
  priceOld: {
    position: 'absolute',
    fontSize: theme.spacing(2.75),
    verticalAlign: 'top',
    color: theme.palette.grey[600],
    fontWeight: 500,
    textDecoration: 'line-through',
  },
}));

const PricingBlock = ({ data, ...props }) => {
  const classes = useStyles();
  const currency = useSelector(state => state.general.currency);

  return (
    <Container className={classes.container} maxWidth="xl" component="section" {...props}>
      <Paper className={classes.paper} variant="outlined" elevation={20}>
        <Grid container>
          <Grid className={classes.desc} item xs={12} md={9}>
            <Text className={classes.heading} component="h3" variant="h5">
              {data.heading}
            </Text>
            <Divider />
            <Grid component={List} container className={classes.listContainer}>
              {data.list.map(content => (
                <Grid
                  component={ListItem}
                  className={classes.listItem}
                  item
                  xs={12}
                  md={6}
                  key={content}
                >
                  <ListItemText primary={content} />
                </Grid>
              ))}
            </Grid>
            <Chip className={classes.chip} label="NEW" color="secondary" />
          </Grid>
          <Grid item xs={12} md={3} className={classes.pricing}>
            <Text fontSize={64} className={classes.price}>
              <Text className={classes.priceUnit} component="span" fontSize={32}>
                {currency}
              </Text>
              {data.price ? (
                <>
                  {data.price.current}
                  {data.price.old && data.price.old !== data.price.current && (
                    <Text component="small" className={classes.priceOld}>
                      {currency}
                      {data.price.old}
                    </Text>
                  )}
                </>
              ) : (
                <Skeleton variant="text" width={60} />
              )}
            </Text>
            <Text mb={1.5} color="textSecondary">
              {data.cycle}
            </Text>
            <CTAButton color="primary" xlarge variant="contained" {...data.button}>
              {data.button.label}
            </CTAButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

PricingBlock.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.shape({
      current: PropTypes.number,
      old: PropTypes.number,
    }),
    cycle: PropTypes.string,
    button: PropTypes.shape({
      label: PropTypes.string,
    }),
  }).isRequired,
};

export default PricingBlock;
