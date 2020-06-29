/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Container, Divider, Link } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import FeatureSection from 'components/organisms/FeatureSection/FeatureSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import PricingBlock from 'components/organisms/PricingBlock/PricingBlock';
import Text from 'components/atoms/Text/Text';

const infoRef = React.createRef();
const buyRef = React.createRef();

const YTContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const sections = [
  {
    img: 'http://img.fastcast4u.com/react/alexa/alexa-front.png',
    heading: 'Why create your own Alexa Skill?',
    content:
      'There are over 100 million Alexa devices sold worldwide and still growing. There’s little doubt that voice control is the future, and Alexa is at the top. Create your own Alexa Skill and let users of Smart Amazon Smart speakers easily tune in to your station.',
    button: {
      label: 'DEMO SKILL',
      href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
    },
  },
  {
    img: (
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

const accordion = [
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
          online radio”), or periods used in abbreviations (for example, "a. b. c."). Other
          characters like numbers must be spelled out. For example, "radio twenty one".
        </Text>
        <Text>
          Invocation names cannot contain any of the Alexa skill launch phrases such as "launch",
          "ask", "tell", "open", "load", "begin", and "enable". Wake words including "Alexa",
          "Amazon", "Echo", "Computer", or the words "skill" or "app" are not allowed.{' '}
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

const AlexaSkill = () => {
  return (
    <>
      <HeroSection scrollRef={infoRef} />
      <FullContainer maxWidth="xl" overflowHidden innerRef={infoRef}>
        {sections.map((props, i) => (
          <React.Fragment key={i}>
            <RowSection long {...props} reverse={i % 2 === 0} />
            {i + 1 < sections.length && <Divider variant="middle" />}
          </React.Fragment>
        ))}
      </FullContainer>
      <FeatureSection />
      <PricingBlock innerRef={buyRef} />
      <Container maxWidth="xl">
        <Text component="h2" variant="h4" mt={4} mb={6} align="center" fontWeight={500}>
          Frequently Asked Questions
        </Text>
        <Accordion data={accordion} />
      </Container>
    </>
  );
};

export default AlexaSkill;
