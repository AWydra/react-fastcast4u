import React from 'react';
import styled from 'styled-components';
import { Container, ThemeProvider } from '@material-ui/core';
import FooterWidget from 'components/molecules/FooterWidget/FooterWidget';
import theme from 'theme/footerTheme';

const data = [
  {
    title: 'PRODUCT & SERVICES',
    content: [
      { heading: 'Radio Server', href: '/link1' },
      { heading: 'Mobile App', href: '/link2' },
      { heading: 'Radio Player', href: '/link2' },
      { heading: 'Alexa Radio Skill', href: '/link2' },
    ],
  },
  {
    title: 'RESOURCES',
    content: [
      { heading: 'Radio Directory', href: '/link1' },
      { heading: 'Tutorials', href: '/link2' },
      { heading: 'FAQ', href: '/link2' },
      { heading: 'Server Uptime', href: '/link2' },
    ],
  },
  {
    title: 'SUPPORT',
    content: [
      { heading: 'LiveChat', href: '/link1' },
      { heading: 'Call', href: '/link2' },
      { heading: 'Message us', href: '/link2' },
      { heading: 'Client Area', href: '/link2' },
    ],
  },
  {
    title: 'SOCIAL',
    content: [
      { heading: 'Facebook', href: '/link1' },
      { heading: 'YouTube', href: '/link2' },
    ],
  },
];

const FooterContainer = styled(Container)`
  margin-top: auto;
  padding: 0;
  padding: ${theme.spacing(6)}px 0;
  background-color: ${theme.palette.grey[900]};
  color: white;
`;

const Footer = () => (
  <ThemeProvider theme={theme}>
    <FooterContainer maxWidth={false}>
      <Container maxWidth="xl">
        <FooterWidget data={data} />
      </Container>
    </FooterContainer>
  </ThemeProvider>
);

export default Footer;
