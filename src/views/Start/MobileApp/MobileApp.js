import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import PhoneSection from 'components/organisms/PhoneSection/PhoneSection';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
  phoneSection: {
    marginTop: theme.spacing(4),
  },
  item: {
    padding: 0,
  },
  listIcon: {
    minWidth: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: 18,
  },
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const MobileApp = () => {
  const classes = useStyles();
  const appContent = useSelector(state => state.language.app);
  const content = useSelector(state => state.language.start.app);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={7}>
            <Image src="https://img.fastcast4u.com/react/app/phon2.png" />
          </Grid>
          <Grid item xs={12} md={5}>
            <Text component="h2" variant="h4" fontWeight={500}>
              {content.section.heading}
            </Text>
            <Text color="textSecondary" variant="h6" my={2}>
              {content.section.content}
            </Text>
            <List>
              {content.section.list.map(content => (
                <ListItem key={content} disableGutters className={classes.item}>
                  <ListItemIcon className={classes.listIcon}>
                    <CheckCircleIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={content} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <PhoneSection className={classes.phoneSection} data={appContent.slider} />
      </Container>
      <Text variant="h4" fontWeight={500} align="center" mt={4}>
        {content.cta.heading}
      </Text>
      <CTAButton
        className={classes.button}
        component={Link}
        to="/mobile-app"
        xlarge
        color="primary"
      >
        {content.cta.label}
      </CTAButton>
    </>
  );
};

export default MobileApp;
