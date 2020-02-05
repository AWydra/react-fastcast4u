import React from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import FooterContainer from 'components/atoms/FooterContaier/FooterContainer';
import FooterWidget from 'components/molecules/FooterWidget/FooterWidget';
import FooterLinks from 'components/molecules/FooterLinks/FooterLinks';
import theme from 'theme/footerTheme';

const data = [
  {
    title: 'PRODUCT &\xa0SERVICES',
    content: [
      { heading: 'Radio Server', href: '/order' },
      { heading: 'Mobile App', href: '/app' },
      { heading: 'Radio Player', href: '/customize' },
      { heading: 'Alexa Radio Skill', href: '/alexa-skill' },
    ],
  },
  {
    title: 'RESOURCES',
    content: [
      { heading: 'Radio Directory', href: '/radio-directory' },
      { heading: 'Tutorials', href: '/help' },
      { heading: 'FAQ', href: '/faq' },
      {
        heading: 'Server Uptime',
        href: 'https://billing.fastcast4u.com/serverstatus.php',
        external: true,
      },
    ],
  },
  {
    title: 'SUPPORT',
    content: [
      { heading: 'LiveChat', href: '/chat' }, // Tawk.to API
      { heading: 'Call', href: '/contact' },
      { heading: 'Message us', href: '/ticket' },
      { heading: 'Client Area', href: '/login' },
    ],
  },
  {
    title: 'SOCIAL',
    content: [
      { heading: 'Facebook', href: '//www.facebook.com/freeshoutcast/', external: true },
      {
        heading: 'YouTube',
        href: 'https://www.youtube.com/user/FastCast4u/videos/',
        external: true,
      },
    ],
  },
];

const Footer = () => (
  <ThemeProvider theme={theme}>
    <FooterContainer maxWidth={false} p={0}>
      <Container maxWidth="xl">
        <FooterWidget data={data} />
        <FooterLinks />
      </Container>
    </FooterContainer>
  </ThemeProvider>
);

export default Footer;
