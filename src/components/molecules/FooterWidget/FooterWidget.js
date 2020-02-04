// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, List } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import NavLink from 'components/atoms/NavLink/NavLink';

const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const FooterWidget = ({ data }) => (
  <Grid component="nav" container spacing={3}>
    {data.map((items, i) => (
      <Grid key={i} item xs={6} xl={3}>
        <Text
          component="h2"
          variant="h5"
          mb={1}
          pl={1}
          fontSize={17}
          fontWeight={700}
          color="textSecondary"
        >
          {items.title}
        </Text>
        <List>
          {items.content.map((item, ii) => (
            <StyledListItem key={ii}>
              <NavLink focusRipple component={Link} to="/asd">
                {item.heading}
              </NavLink>
              <br />
            </StyledListItem>
          ))}
        </List>
      </Grid>
    ))}
  </Grid>
);

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
