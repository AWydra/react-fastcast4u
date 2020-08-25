import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(-8),
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    maxWidth: 800,
    padding: theme.spacing(6, 0),
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(16, 0),
    },
  },
  imageContainer: {
    padding: theme.spacing(0, 0, 6, 0),
    flexBasis: '70%',
    minWidth: 200,
    maxWidth: 300,
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset',
      padding: theme.spacing(0, 4, 0, 0),
      flexBasis: 250,
      flexGrow: 0,
    },
  },
  image: {
    width: '100%',
    padding: theme.spacing(0.5),
    border: '1px solid',
    borderColor: theme.palette.grey[400],
    borderRadius: '50%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  listItem: {
    padding: theme.spacing(0.5, 0),
    color: theme.palette.text.primary,
  },
  listIcon: {
    minWidth: theme.spacing(4.5),
    color: theme.palette.text.primary,
  },
}));

const BusinessCard = ({ title, subtitle, content, img, links }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid className={classes.container} container>
        <Grid className={classes.imageContainer} item xs={12} md={6}>
          <Image className={classes.image} src={img} />
        </Grid>
        <Grid className={classes.contentContainer} item xs={12} md={6}>
          <Text component="h2" variant="h4" fontWeight={600} mb={1}>
            {title}
          </Text>
          <Text variant="h6" color="textSecondary" mb={2}>
            {subtitle}
          </Text>
          <Text fontSize={17} mb={2}>
            {content}
          </Text>
          <List>
            {links.map(({ component, icon, to, href, content }, i) => (
              <ListItem key={i} className={classes.listItem} disableGutters>
                <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Link component={component} to={to} href={href} target={href && '_blank'}>
                      {content}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

BusinessCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
      icon: PropTypes.element,
      content: PropTypes.string,
    }),
  ).isRequired,
};

export default BusinessCard;
