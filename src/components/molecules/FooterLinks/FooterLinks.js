import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';
import NavLink from 'components/atoms/NavLink/NavLink';

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  padding-bottom: 2px;
  border-bottom: 1px dotted;
`;

const FooterLinks = () => {
  const content = useSelector(state => state.language.footer);

  return (
    <Text component="div" py={2} color="textSecondary" align="center" fontSize={14}>
      {content.copyrights} &copy; 2008-{new Date().getFullYear()} {content.reserved}
      <nav>
        <StyledNavLink to="/tos">{content.tos}</StyledNavLink> /{' '}
        <StyledNavLink to="/privacy">{content.privacy}</StyledNavLink>
      </nav>
    </Text>
  );
};

export default FooterLinks;
