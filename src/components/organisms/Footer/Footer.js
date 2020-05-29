// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import FooterContainer from 'components/atoms/FooterContaier/FooterContainer';
import FooterWidget from 'components/molecules/FooterWidget/FooterWidget';
import FooterLinks from 'components/molecules/FooterLinks/FooterLinks';
import FooterThemeProvider from 'theme/FooterThemeProvider';

const data = [
  {
    title: 'SERVICES',
    content: [
      { heading: 'Radio Server', href: '/order' },
      { heading: 'Mobile App', href: '/app', external: true },
      { heading: 'Radio Player', href: '/customize', external: true },
      // { heading: 'Alexa Radio Skill', href: '/alexa-skill' },
    ],
  },
  {
    title: 'RESOURCES',
    content: [
      { heading: 'Radio Directory', href: '/radio-directory' },
      { heading: 'Tutorials', href: '/help', external: true },
      { heading: 'FAQ', href: '/faq', external: true },
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
      { heading: 'LiveChat', href: '/contact' }, // Tawk.to API
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

const Footer = () => {
  const location = useLocation();
  const isHidden = location.pathname.includes('order');

  return (
    <FooterThemeProvider>
      <FooterContainer component="footer" maxWidth={false} p={0}>
        <Container maxWidth="xl">
          {!isHidden && <FooterWidget data={data} />}
          <FooterLinks />
        </Container>
      </FooterContainer>
    </FooterThemeProvider>
  );
};

export default Footer;
