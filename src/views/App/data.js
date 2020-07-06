import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import { modeSwitch } from 'utils/theme';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from 'assets/svg/AppleIcon';

const Icon = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacing(0.75)}px;
    display: inline-block;
    vertical-align: text-top;

    & svg {
      vertical-align: baseline;
      font-size: 18px;
      color: ${theme.palette.grey[modeSwitch(700, 300)]};
    }
  `}
`;

export const heroData = {
  heading: 'New Mobile App for your Online Radio Station',
  pictures: {
    mobile: 'https://img.fastcast4u.com/react/app/app-bg',
    // desktop: 'https://img.fastcast4u.com/react/alexa/alexa-bg',
    alt: 'Phone in a hand',
  },
  buttons: [
    {
      label: 'CREATE YOUR APP',
      onClick: () => console.log('clicked'),
      color: 'primary',
    },
    {
      label: 'Watch App Video',
      color: 'secondary',
      component: 'a',
      href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
      target: '_blank',
    },
  ],
};

export const sectionsData = [
  {
    img: 'https://img.fastcast4u.com/react/app/IPadIP',
    heading: 'Android & iOS',
    content: 'The New 2020 Mobile App for Android, iPhone & iPad.',
    button: {
      label: 'Specification',
      href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
    },
  },
  {
    img: 'https://img.fastcast4u.com/react/app/IPX_2',
    heading: 'Radio stream and more...',
    content:
      'The App features a Player for Online Radio and Live TV/Video streams. You get a unique App with your own branding, artwork and color theme.',
  },
  {
    img: 'https://img.fastcast4u.com/react/app/IPX_5',
    heading: 'Your own Mobile App',
    content:
      'Create your own Mobile App with a customized look and content. Your Social Media and Website will be available in a built-in WebView.',
  },
  {
    img: 'https://img.fastcast4u.com/react/app/app-creator',
    heading: 'Online App Creator',
    content: 'Design and Preview your App in the Creator. Absolutely no coding skills required!',
    button: {
      label: 'OPEN APP CREATOR',
      onClick: () => {
        console.log('clicked');
      },
    },
  },
];

export const deliveryAccordionsData = [
  {
    heading: 'Android & iOS App Hosting',
    content: (
      <>
        <Text>
          <Icon>
            <AndroidIcon fontSize="small" />
          </Icon>
          Android App can be published and hosted for free on our{' '}
          <Link href="//play.google.com/apps/publish/signup/" target="_blank">
            Google Play
          </Link>{' '}
          account or on your own Google Play account.
        </Text>
        <Text>
          <Icon>
            <AppleIcon fontSize="small" />
          </Icon>
          You need your own{' '}
          <Link href="//developer.apple.com/programs/enroll/" target="_blank">
            Apple Developer Account
          </Link>{' '}
          and Apple ID to have your iOS App submitted to Apple App Store.
        </Text>
      </>
    ),
  },
  {
    heading: 'Product Delivery time',
    content:
      'Every App is created individually by our App Development Team on be basis of the project you make in Online App Creator. The App delivery time is up to 30 days from the day we receive the project and all required details.',
  },
  {
    heading: 'Device Compatibility',
    content: (
      <>
        <Text>
          <Icon>
            <AndroidIcon fontSize="small" />
          </Icon>
          App is supported by Android 9.0 - Pie. It is also backward compatible with older Android
          builds, up till Android 4.1 JellyBean.
        </Text>
        <Text>
          <Icon>
            <AppleIcon fontSize="small" />
          </Icon>
          Apple iOS App requires iOS 12.1 and above.
        </Text>
      </>
    ),
  },
];

export const packageData = [
  {
    data: {
      id: '1',
      name: 'Push Notifications',
      description:
        'Improve interaction with your listeners by sending notifications through the App',
    },
    cycle: 'ONE TIME',
    price: 10,
  },
  {
    data: {
      id: '2',
      name: 'App Monetization',
      description: 'Generate revenue from AdMob Ads displayed in your App',
    },
    cycle: 'ONE TIME',
    price: 20,
  },
];

export const specificationAccordionsData = [
  {
    heading: 'Radio Stream, Live TV and Video',
    content: (
      <Text>
        The App supports Online Radio Streams (MP3, AAC or AAC+) Live TV Streams (.m3u8) and Video
        Streams (MP4). You can have multiple streams in one App! Do not have your Online Radio
        station yet?{' '}
        <Link href="/start" target="_blank">
          Create it with us.
        </Link>
      </Text>
    ),
  },
  {
    heading: 'Custom Design',
    content:
      'Easily design and preview your App with a free Online Mobile App Creator. Next, we create the App individually for your project. All Apps are released free from our branding.',
  },
  {
    heading: 'Social Network & Web',
    content:
      'Share your Social Media Pages and view the content of websites in WebView without any external web browsers.',
  },
  {
    heading: 'Podcasts',
    content: 'Your broadcasts and shows from SoundCloud are listed and available on demand.',
  },
  {
    heading: 'Push Notifications',
    content:
      'Keep your listeners updated by sending them Push Notifications from an online OneSignal Panel. It’s a great way to notify about your live broadcasts and scheduled shows.',
  },
  {
    heading: 'Monetization',
    content:
      "Make money online on displaying Ads in your App. Ads are delivered by AdMob so you do not have to look for advertisers, we'll just hook up Apps with your AdMob account.",
  },
];
