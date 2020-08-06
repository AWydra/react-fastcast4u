// @ts-nocheck
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import FooterContainer from 'components/atoms/FooterContaier/FooterContainer';
import FooterWidget from 'components/molecules/FooterWidget/FooterWidget';
import FooterLinks from 'components/molecules/FooterLinks/FooterLinks';
import FooterThemeProvider from 'theme/FooterThemeProvider';

const Footer = () => {
  const location = useLocation();
  const isHidden = location.pathname.includes('order');
  const content = useSelector(state => state.language.footer.items);

  const data = useMemo(
    () => [
      {
        title: content[0].title,
        content: [
          { heading: content[0].content[0], href: '/order' },
          { heading: content[0].content[1], href: '/app' },
          { heading: content[0].content[2], href: '/customize', external: true },
          { heading: content[0].content[3], href: '/alexa-skill' },
        ],
      },
      {
        title: content[1].title,
        content: [
          { heading: content[1].content[0], href: '/radio-directory' },
          { heading: content[1].content[1], href: '/help' },
          { heading: content[1].content[2], href: '/faq' },
          {
            heading: content[1].content[3],
            href: 'https://billing.fastcast4u.com/serverstatus.php',
            external: true,
          },
        ],
      },
      {
        title: content[2].title,
        content: [
          { heading: content[2].content[0], href: '/contact' },
          { heading: content[2].content[1], href: '/contact' },
          { heading: content[2].content[2], href: '/ticket' },
          { heading: content[2].content[3], href: '/login' },
        ],
      },
      {
        title: content[3].title,
        content: [
          {
            heading: content[3].content[0],
            href: '//www.facebook.com/freeshoutcast/',
            external: true,
          },
          {
            heading: content[3].content[1],
            href: 'https://www.youtube.com/user/FastCast4u/videos/',
            external: true,
          },
        ],
      },
    ],
    [content],
  );

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
