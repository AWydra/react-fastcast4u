import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';
import NavLink from 'components/atoms/NavLink/NavLink';

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  padding-bottom: 2px;
  border-bottom: 1px dotted;
`;

const FooterLinks = () => (
  <Text component="div" py={2} color="textSecondary" align="center" fontSize={14}>
    Copyrights &copy; 2008-{new Date().getFullYear()} All Rights Reserved by FastCast DWC-LLC
    <nav>
      <StyledNavLink to="/tos">Terms of Service</StyledNavLink> /{' '}
      <StyledNavLink to="/privacy">Privacy Policy</StyledNavLink>
    </nav>
  </Text>
);

export default FooterLinks;
