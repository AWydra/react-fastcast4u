import React from 'react';
import {
  Button,
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
import Image from 'components/atoms/Image/Image';
import Price from 'components/molecules/Price/Price';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3, 0, 7),
  },
  item: {
    margin: theme.spacing(5, 0, 2),
  },
  box: {
    height: '100%',
    paddingBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.grey[modeSwitch(50, 900)],
    textAlign: 'center',
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
  image: {
    height: theme.spacing(6),
    marginTop: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(4),
  },
}));

const PricingTable = ({ ...props }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" {...props}>
      <Grid className={classes.container} container spacing={0}>
        <Grid className={classes.item} item md={4}>
          <Paper className={classes.box} variant="outlined">
            <Text className={classes.title} component="h4" variant="h6">
              Android App
            </Text>
            <Divider className={classes.divider} />
            <Price price={99} oldPrice={149} />
            <List className={classes.list}>
              <ListItem>
                <ListItemText primary="Android Smartphones" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Android Tablets" />
              </ListItem>
            </List>
            <Image className={classes.image} src="https://fastcast4u.com/images/app/android.png" />
            <Button className={classes.btn} color="primary" variant="contained" size="large">
              GET NOW
            </Button>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.box} variant="outlined">
            <Text
              className={classes.title}
              component="h4"
              variant="h5"
              pt={2.5}
              pb={2.5}
              fontWeight={500}
              fontSize={24}
            >
              Android &amp; iOS App
            </Text>
            <Divider className={classes.divider} />
            <Price price={149} oldPrice={199} />
            <List className={classes.list}>
              <ListItem>
                <ListItemText primary="Android Smartphones &amp; Tablets" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Apple iPhone &amp; iPad" />
              </ListItem>
            </List>
            <Image
              className={classes.image}
              src="https://fastcast4u.com/images/app/IP&android.png"
              style={{ margin: '20px 0' }}
            />
            <Button className={classes.btn} color="primary" variant="contained" size="large">
              GET NOW
            </Button>
          </Paper>
        </Grid>
        <Grid className={classes.item} item md={4}>
          <Paper className={classes.box} variant="outlined">
            <Text className={classes.title} component="h4" variant="h6">
              iOS App
            </Text>
            <Divider className={classes.divider} />
            <Price price={99} oldPrice={149} />
            <List className={classes.list}>
              <ListItem>
                <ListItemText primary="Apple iPhone" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Apple iPad" />
              </ListItem>
            </List>
            <Image className={classes.image} src="https://fastcast4u.com/images/app/IP.png" />
            <Button className={classes.btn} color="primary" variant="contained" size="large">
              GET NOW
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricingTable;
