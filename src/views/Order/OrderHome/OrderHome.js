import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import Features from 'components/organisms/Features/Features';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import orderServices from 'services/order';
import { useAlert } from 'utils/customHooks';

import RocketIcon from 'assets/svg/RocketIcon';
import MicrophoneIcon from 'assets/svg/MicrophoneIcon';
import ReturnIcon from 'assets/svg/ReturnIcon';
import EarningIcon from 'assets/svg/EarningIcon';
import EffectiveIcon from 'assets/svg/EffectiveIcon';
import VideoIcon from 'assets/svg/VideoIcon';
import RemoteIcon from 'assets/svg/RemoteIcon';

const data = [
  {
    icon: <MicrophoneIcon />,
    heading: 'Unlimited Radio & AutoDJ',
    description:
      'Enjoy the Unlimited listener traffic for your online station and Unlimited AutoDJ disc space for audio files',
  },
  {
    icon: <ReturnIcon />,
    heading: '10-Day Money Back Guarantee',
    description:
      'Don’t hesitate to test! We guarantee a full money refund if you are not satisfied with our product or service',
  },
  {
    icon: <EffectiveIcon />,
    heading: 'Instant Server Setup',
    description:
      'Your Radio Server will be set up immediately and you can start broadcasting online within minutes',
  },
  {
    icon: <EarningIcon />,
    heading: 'Stream Monetization Solutions',
    description:
      'Earn Money Online from Ads in your Mobile Apps or WebPlayer and SHOUTcast Stream Monetization System',
  },
  {
    icon: <VideoIcon />,
    heading: 'Radio Player & Addons',
    description:
      'Easily share your station on the Internet by Free WebPlayer Page and clever radio addons',
  },
  {
    icon: <RemoteIcon />,
    heading: 'Live Customer Support',
    description:
      'Chat or talk with friendly Customer Service and Technical Support whenever you need assistance',
  },
];

const Order = () => {
  const [disabled, setDisabled] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const alert = useAlert();

  const handleClick = async () => {
    try {
      setDisabled(true);
      await orderServices.setStep1();
      setRedirect(true);
    } catch (err) {
      alert.error(err.message);
      setDisabled(false);
    }
  };

  return (
    <FullContainer center maxWidth="xl">
      <HeadingBlock
        title="Build the Server Package that's right for you in 3 Easy Steps"
        subtitle="We know what's important for streaming online so all Radio Servers come with:"
      />
      <Features data={data} />
      <CTAButton
        color="primary"
        size="large"
        xlarge
        onClick={handleClick}
        mt={7}
        endIcon={<RocketIcon />}
        disabled={disabled}
      >
        Start Now
      </CTAButton>
      {redirect && <Redirect push to="order/package" />}
    </FullContainer>
  );
};

export default Order;
