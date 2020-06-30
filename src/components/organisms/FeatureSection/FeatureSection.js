import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  heading: {
    maxWidth: 800,
    margin: theme.spacing(0, 'auto', 5),
    textAlign: 'center',
    fontWeight: 500,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemIcon: {
    minWidth: theme.spacing(7),
    '& svg': {
      fontSize: 38,
    },
  },
  primary: {
    marginBottom: theme.spacing(0.75),
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  secondary: {
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
}));

const FeatureSection = ({ data, ...props }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl" component="section" {...props}>
      <Text className={classes.heading} component="h2" variant="h4">
        {data.heading}
      </Text>
      <Grid container spacing={2}>
        <Grid item className={classes.item} xs={12} md={5}>
          <Image src={data.img} />
        </Grid>
        <Grid item className={classes.item} xs={12} md={7}>
          <List>
            {data.list.map((item, i) => (
              <ListItem disableGutters key={i}>
                <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.primary,
                    secondary: classes.secondary,
                  }}
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

FeatureSection.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    img: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.exact({
        icon: PropTypes.element,
        primary: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      }),
    ),
  }).isRequired,
};

export default FeatureSection;
