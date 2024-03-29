// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Grid, List, Divider } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import NavLink from 'components/atoms/NavLink/NavLink';
import { useCurrentLanguage } from 'utils/customHooks';

const StyledGrid = styled(Grid)`
  ${({ theme }) =>
    css`
      padding: ${theme.spacing(6)}px 0 ${theme.spacing(4)}px;
    `}
`;

const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const FooterWidget = ({ data }) => {
  const lng = useCurrentLanguage();

  return (
    <>
      <StyledGrid component="nav" container spacing={3}>
        {data.map((items, i) => (
          <Grid key={i} item xs={6} lg={3}>
            <Text
              component="h2"
              variant="h5"
              mb={1}
              pl={1}
              fontSize={17}
              fontWeight={700}
              letterSpacing={1.5}
              color="textSecondary"
            >
              {items.title}
            </Text>
            <List>
              {items.content.map((item, ii) => (
                <StyledListItem key={ii}>
                  <NavLink
                    to={`${item.external ? '' : lng}${item.href}`}
                    external={item.external}
                    py={0.75}
                    px={1}
                  >
                    {item.heading}
                  </NavLink>
                  <br />
                </StyledListItem>
              ))}
            </List>
          </Grid>
        ))}
      </StyledGrid>

      <Divider />
    </>
  );
};

FooterWidget.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
          href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default FooterWidget;
