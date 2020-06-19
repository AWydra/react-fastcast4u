/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Divider, Link } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import RowSection from 'components/organisms/RowSection/RowSection';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import FeatureSection from 'components/organisms/FeatureSection/FeatureSection';
import Accordion from 'components/organisms/Accordion/Accordion';
import Text from 'components/atoms/Text/Text';

const sections = [
  {
    img: 'http://zephyr.us-themes.com/wp-content/uploads/iPhone-6-Infinity1.png',
    heading: 'Wonderful digital things require a good mix of combined skills',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus. Praesent viverra, est vitae efficitur auctor, nibh orci varius ligula, gravida molestie enim justo ut diam. Praesent eget congue lacus, ut viverra neque.',
    button: {
      label: 'Start Now',
      to: '/order',
    },
  },
  {
    img: 'http://zephyr.us-themes.com/wp-content/uploads/iPhone-6-Infinity1.png',
    heading: 'Wonderful digital things require a good mix of combined skills',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus. Praesent viverra, est vitae efficitur auctor, nibh orci varius ligula, gravida molestie enim justo ut diam. Praesent eget congue lacus, ut viverra neque.',
    button: {
      label: 'Start Now',
      to: '/order',
    },
  },
  {
    img: 'http://zephyr.us-themes.com/wp-content/uploads/iPhone-6-Infinity1.png',
    heading: 'Wonderful digital things require a good mix of combined skills',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus. Praesent viverra, est vitae efficitur auctor, nibh orci varius ligula, gravida molestie enim justo ut diam. Praesent eget congue lacus, ut viverra neque.',
    button: {
      label: 'Start Now',
      to: '/order',
    },
  },
];

const accordion = [
  {
    heading: 'How does it work?',
    content:
      'Create a unique invocation that will bring up your radio stations on Amazon Echo Speakers (e.g. Alexa, play Top Hits Radio)',
  },
  {
    heading: 'Skill Publication',
    content:
      'Your Radio Skill will be officially published in the Amazon Store and available on Alexa Echo devices, where it can easily enabled by incoving the Skill name or in Amazon store.',
  },
  {
    heading: 'How to create a good Invocation?',
    content: (
      <Text component="span">
        Your invocation name should be two or more words, and can contain only lower-case alphabetic
        characters, spaces between words, possessive apostrophes (for example, "sam's online
        radio”), or periods used in abbreviations (for example, "a. b. c."). Other characters like
        numbers must be spelled out. For example, "radio twenty one".
        <br />
        <br />
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
    ),
  },
];

const AlexaSkill = () => (
  <>
    <HeroSection />
    <FullContainer maxWidth="xl" overflowHidden>
      {sections.map((props, i) => (
        <React.Fragment key={i}>
          <RowSection long {...props} reverse={i % 2 === 0} />
          {i + 1 < sections.length && <Divider variant="middle" />}
        </React.Fragment>
      ))}
    </FullContainer>
    <FeatureSection />
    <Container maxWidth="xl">
      <Text component="h2" variant="h4" mt={4} mb={6} align="center" fontWeight={500}>
        Frequently Asked Questions
      </Text>
      <Accordion data={accordion} />
    </Container>
  </>
);

export default AlexaSkill;
