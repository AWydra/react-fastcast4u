import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import Price from 'components/molecules/Price/Price';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3, 0, 7),
    justifyContent: 'center',
  },
  item: {
    zIndex: ({ best }) => best && 1,

    [theme.breakpoints.down('md')]: {
      order: ({ best }) => best && 1,
    },
    [theme.breakpoints.up('lg')]: {
      margin: ({ best }) => (best ? 0 : theme.spacing(5, 0, 2)),
    },
  },
  box: {
    height: '100%',
    paddingBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: theme.shadows[6],
  },
  title: {
    width: '100%',
    padding: ({ best }) => theme.spacing(best ? 2.5 : 2, 0),
    backgroundColor: theme.palette.grey[modeSwitch(50, 900)],
    textAlign: 'center',
    fontWeight: 500,
  },
  divider: {
    width: '100%',
  },
  list: {
    paddingTop: theme.spacing(3),
    '& li': {
      padding: theme.spacing(0.5, 2),
      textAlign: 'center',
    },
  },
  imageContainer: {
    height: theme.spacing(7),
    margin: ({ best }) => best && theme.spacing(2, 0),
    padding: theme.spacing(1),
  },
  image: {
    height: '100%',
    filter: modeSwitch(false, 'brightness(0) invert(1)'),
  },
  btn: {
    marginTop: theme.spacing(4),
  },
}));

const PricingTable = ({ title, current, regular, list, image, link, best, ...props }) => {
  const classes = useStyles({ best });

  return (
    <Grid
      className={classes.item}
      component="article"
      item
      xs={12}
      sm={best ? 9 : 6}
      md={best && 6}
      lg={4}
      {...props}
    >
      <Paper className={classes.box} variant="outlined">
        <Text className={classes.title} component="h4" variant="h6">
          {title}
        </Text>
        <Divider className={classes.divider} />
        <Price current={current} regular={regular} />
        <List className={classes.list}>
          {list.map(content => (
            <ListItem key={content}>
              <ListItemText primary={content} />
            </ListItem>
          ))}
        </List>
        <div className={classes.imageContainer}>
          {image && <Image className={classes.image} src={image} />}
        </div>
        <Button
          className={classes.btn}
          component="a"
          href={link}
          color="primary"
          variant="contained"
          size="large"
        >
          GET NOW
        </Button>
      </Paper>
    </Grid>
  );
};

PricingTable.defaultProps = {
  current: false,
  regular: false,
  best: false,
  image: '',
};

PricingTable.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  regular: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
  best: PropTypes.bool,
};

export default PricingTable;
