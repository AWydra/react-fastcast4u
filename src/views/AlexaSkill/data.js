/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Link } from '@material-ui/core';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Text from 'components/atoms/Text/Text';
import Cite from 'components/atoms/Cite/Cite';
import { AddCircle, PlayCircleFilled, Help } from '@material-ui/icons';

export const infoRef = React.createRef();
export const buyRef = React.createRef();

export const YTContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const heroData = {
  heading: 'Alexa Skill for your Radio Station',
  pictures: {
    mobile: 'https://img.fastcast4u.com/react/alexa/alexa-bg-mobile.png',
    desktop: 'https://img.fastcast4u.com/react/alexa/alexa-bg.png',
  },
  buttons: [
    {
      label: '\xa0SEE MORE\xa0',
      onClick: () => infoRef.current.scrollIntoView({ behavior: 'smooth' }),
      color: 'primary',
    },
    {
      label: 'TEST DEMO',
      color: 'secondary',
      component: 'a',
      href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
      target: '_blank',
    },
  ],
};

export const sectionsData = [
  {
    img: 'http://img.fastcast4u.com/react/alexa/alexa-front.png',
    heading: 'Why create your own Alexa Skill?',
    content:
      'There are over 100 million Alexa devices sold worldwide and still growing. There’s little doubt that voice control is the future, and Alexa is at the top. Create your own Alexa Skill and let users of Amazon Smart speakers easily tune in to your station.',
    button: {
      label: 'DEMO SKILL',
      href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
    },
  },
  {
    img: (
      <LazyLoadComponent>
        <YTContainer>
          <iframe
            title="alexa-movie"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/KcJt61r7MFs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YTContainer>
      </LazyLoadComponent>
    ),
    heading: 'Get your own Skill',
    content: 'Get your Skill for Amazon Echo Smart Speakers with a custom voice command.',
    button: {
      label: 'GET NOW',
      onClick: () => {
        buyRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
  },
];

export const featureData = {
  heading: 'Handy commands to launch your radio',
  img: 'https://fastcast4u.com/images/landing/alexa.png',
  list: [
    {
      icon: <AddCircle />,
      primary: <Cite>{'Alexa, enable {Your Radio Name}'}</Cite>,
      secondary: 'Simple activation on Alexa devices by a voice command or through Amazon App',
    },
    {
      icon: <PlayCircleFilled />,
      primary: <Cite>{'Alexa, launch {Your Radio Name}'}</Cite>,
      secondary: 'Easily launch and control radio stream with customizable voice commands',
    },
    {
      icon: <Help />,
      primary: <Cite>{'Alexa, ask {Your Radio Name}, '}title please?</Cite>,
      secondary:
        'Whenever asked, Alexa tells the current track title, artist name or broadcast data',
    },
  ],
};

export const pricingData = {
  heading: 'Alexa Skill Package',
  list: [
    'Your custom invotation name',
    'Start/play/launch radio stream',
    'Publication on Amazon Store included',
    'The current title information',
    'Multilingual support',
    'Compatible with Amazon Echo & Alexa Devices',
  ],
  price: {
    current: 60,
    old: 99,
  },
  cycle: 'ONE-TIME',
  button: {
    label: 'get now',
    component: 'a',
    href: 'https://fastcast4u.com/account/cart.php?a=add&pid=523&promocode=Alexa',
  },
};

export const accordionsData = [
  {
    heading: 'How does it work?',
    content:
      'Create a unique invocation that will bring up your radio stations on Amazon Echo Speakers (e.g. Alexa, play Top Hits Radio). Just fill-in one simple form to have your Alexa Skill created and published!',
  },
  {
    heading: 'Skill publication',
    content:
      'Your Radio Skill will be officially published on the Amazon Store and available for Alexa Echo devices.',
  },
  {
    heading: 'How to create a good invocation?',
    content: (
      <>
        <Text>
          Your invocation name should be two or more words, and can contain only lower-case
          alphabetic characters, spaces between words, possessive apostrophes (for example, "sam's
          online radio”). Abbreviations should be marked as periods, for example, FM is marked as
          "f. m."). All numbers must be spelled out, for example: "radio twenty one".
        </Text>
        <Text mt={1}>
          Invocation names cannot contain any of the Alexa launch phrases such as "launch", "ask",
          "tell", "open", "load", "begin", and "enable". Wake words including "Alexa", "Amazon",
          "Echo", "Computer", or the words "skill" or "app" are not allowed.{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.amazon.com/en-US/docs/alexa/custom-skills/choose-the-invocation-name-for-a-custom-skill.html"
          >
            Learn more
          </Link>
        </Text>
      </>
    ),
  },
  {
    heading: 'What languages are supported?',
    content:
      'Your Skill can be created in one of following languages: English, Spanish, French, Italian, German, Portuguese, Hindi and Japanese.',
  },
  {
    heading: 'Functionalities and voice commands',
    content: (
      <>
        <Text component="h6" variant="h6">
          You can ask Alexa to launch your station, by telling her:
        </Text>
        <Text mt={0.5} mb={2.5}>
          {
            'Alexa, play {Radio Name}, Alexa, launch {Radio Name}, Alexa, open {Radio Name}, Alexa, load {Radio Name} or Alexa, start {Radio Name}.'
          }
        </Text>
        <Text component="h6" variant="h6">
          Ask about the currently played track title:
        </Text>
        <Text mt={0.5}>
          {
            'ask {Radio Name} what is current title, ask {Radio Name} title, or ask {Radio Name} please title.'
          }
        </Text>
      </>
    ),
  },
];
