import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import cmsActions from 'actions/cmsActions';
import cmsServices from 'services/cms';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import Features from 'components/organisms/Features/Features';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import orderServices from 'services/order';
import { useAlert, useCurrentLanguage } from 'utils/customHooks';
import history from 'utils/history';

import RocketIcon from 'assets/svg/RocketIcon';
import MicrophoneIcon from 'assets/svg/MicrophoneIcon';
import ReturnIcon from 'assets/svg/ReturnIcon';
import EarningIcon from 'assets/svg/EarningIcon';
import EffectiveIcon from 'assets/svg/EffectiveIcon';
import VideoIcon from 'assets/svg/VideoIcon';
import RemoteIcon from 'assets/svg/RemoteIcon';

const Order = () => {
  const [loading, setLoading] = useState(false);
  const cycle = useSelector(state => state.cms.order.cycle);
  const content = useSelector(state => state.language.orderHome);
  const lng = useCurrentLanguage();
  const alert = useAlert();
  const location = useLocation();
  const dispatch = useDispatch();

  const data = useMemo(
    () => [
      {
        icon: <MicrophoneIcon />,
        heading: content.features[0].heading,
        description: content.features[0].description,
      },
      {
        icon: <ReturnIcon />,
        heading: content.features[1].heading,
        description: content.features[1].description,
      },
      {
        icon: <EffectiveIcon />,
        heading: content.features[2].heading,
        description: content.features[2].description,
      },
      {
        icon: <EarningIcon />,
        heading: content.features[3].heading,
        description: content.features[3].description,
      },
      {
        icon: <VideoIcon />,
        heading: content.features[4].heading,
        description: content.features[4].description,
      },
      {
        icon: <RemoteIcon />,
        heading: content.features[5].heading,
        description: content.features[5].description,
      },
    ],
    [content],
  );

  useEffect(() => {
    const urlPromocode = new URLSearchParams(location.search).get('promo');
    if (cycle) return;
    setLoading(true);
    cmsServices.getOrderData().then(res => {
      dispatch(cmsActions.setOrderData(res));
      dispatch(orderActions.setPromocode(urlPromocode || res.promocode));
      dispatch(orderActions.setCycle(res.cycle));

      setLoading(false);
    });
  }, [dispatch, location.search]);

  const handleClick = async () => {
    try {
      setLoading(true);
      await orderServices.setStep1();
      history.push(`${lng}/order/package`);
    } catch (err) {
      alert.error(err.message);
      setLoading(false);
    }
  };

  return (
    <FullContainer center maxWidth="xl">
      <HeadingBlock
        title={content.heading.title}
        subtitle={content.heading.subtitle}
        component="h1"
      />
      <Features data={data} />
      <CTAButton
        color="primary"
        size="large"
        xlarge
        onClick={handleClick}
        mt={7}
        endIcon={<RocketIcon />}
        loading={loading}
      >
        {content.button}
      </CTAButton>
    </FullContainer>
  );
};

export default Order;
