import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Grid, CardContent, Divider, Link, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Status from 'components/atoms/Status/Status';

const useStyles = makeStyles(theme => ({
  item: {
    height: '100%',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: theme.typography.pxToRem(69),
    color: theme.palette.primary.main,
  },
  divider: {
    alignSelf: 'stretch',
  },
  desc: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(0, 2),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5),
    },
  },
  list: {
    maxWidth: 500,
    marginTop: theme.spacing(2),
  },
  listItem: {
    margin: theme.spacing(1, 0),
  },
  listHeading: {
    marginBottom: theme.spacing(0.5),
    fontSize: theme.typography.pxToRem(17),
    textAlign: 'center',
  },
  listLink: {
    display: 'block',
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(16),
  },
  button: {
    marginTop: 'auto',
  },
}));

const ContactFeature = ({ icon: Icon, title, desc, button, list }) => {
  const classes = useStyles();

  return (
    <Card className={classes.item}>
      <CardContent className={classes.content}>
        {Icon && <Icon className={classes.icon} />}
        <Text my={2} component="h2" variant="h6">
          {title}
        </Text>
        <Divider variant="middle" className={classes.divider} />
        {desc && (
          <Text className={classes.desc} component="p" variant="body1" color="textSecondary">
            {desc}
          </Text>
        )}
        {list && (
          <Grid className={classes.list} container>
            {list.map(({ heading, content, href }) => (
              <Grid className={classes.listItem} key={heading} item xs={12} sm={6}>
                <Text className={classes.listHeading} variant="h6">
                  {heading}
                </Text>
                <Link className={classes.listLink} href={href}>
                  {content}
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
        {button && (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={button.onClick}
          >
            {button.label}
          </Button>
        )}
        <Status active />
      </CardContent>
    </Card>
  );
};

ContactFeature.defaultProps = {
  icon: false,
  desc: '',
  button: false,
  list: [],
};

ContactFeature.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.oneOf([false])]),
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  button: PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
    PropTypes.oneOf([false]),
  ]),
  list: PropTypes.array,
};

export default ContactFeature;
