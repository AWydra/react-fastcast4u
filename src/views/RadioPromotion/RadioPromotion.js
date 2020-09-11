import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import generalServices from 'services/general';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import PricingTable from 'components/organisms/PricingTable/PricingTable';
import { isNowBetween } from 'utils/date';

const useStyles = makeStyles(theme => ({
  pricing: {
    margin: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
}));

const RadioPromotion = () => {
  const location = useLocation();
  const [promocode, setPromocode] = useState('');
  const [price, setPrice] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const urlPromocode = new URLSearchParams(location.search).get('promo');
    const promocode = isNowBetween(Date.UTC(2020, 8, 12, 7), Date.UTC(2020, 8, 13, 7))
      ? 'flashsalepromo'
      : 'directoryRegPromo';
    setPromocode(urlPromocode || promocode);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!promocode) return;
    generalServices.getPrice({ pid: 479, promocode }).then(res =>
      setPrice({
        current: res.current,
        regular: res.regular,
      }),
    );
  }, [promocode]);

  const pricingData = {
    title: 'Radio Directory Registration Package',
    list: [],
    link: `https://billing.fastcast4u.com/cart.php?a=add&pid=479&promocode=${promocode}`,
    ...price,
  };

  return (
    <Container maxWidth="xl">
      <HeadingBlock
        title="Radio Directory Registration Package"
        subtitle="We'll make your Radio Station popular on the Internet. Your listeners will find your stream much easier!"
      />
      <Grid container spacing={3} justify="center">
        <Grid className={classes.content} item xs={12} lg={7} xl={8}>
          <Text className={classes.text} mb={5}>
            We know that getting new listeners is not easy, so we came up with the new service that
            brings more audience to your station and makes it easy to be found on the Internet!
          </Text>
          <Text component="h2" variant="h4" fontWeight={500} mb={4}>
            How Does It Work?
          </Text>
          <Text className={classes.text} mb={3}>
            We submit your Radio Station to over 15 world&apos;s most popular online Radio Station
            Directories, including Streema, SHOUTcast.com and many more…
          </Text>
          <Text className={classes.text} mb={4}>
            Your station will be available on new platforms, what makes it super easy to tune-in!
          </Text>
          <Text fontSize={15} fontWeight={500}>
            Disclaimer: Your Radio Station can be accepted or rejected by particular Radio
            Directories on the basis of details you provide, directory owner decision or other
            factors not dependent on us.
          </Text>
        </Grid>
        <PricingTable
          className={classes.pricing}
          {...pricingData}
          xs={12}
          sm={9}
          md={7}
          lg={5}
          xl={4}
        />
      </Grid>
      {/* <PricingBlock data={pricingData} /> */}
    </Container>
  );
};

export default RadioPromotion;
