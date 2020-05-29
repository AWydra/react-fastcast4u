// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const StyledContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: inherit;
    margin-top: ${theme.spacing(5)}px;
    flex-direction: inherit;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    ${theme.breakpoints.up('xl')} {
      margin-top: ${theme.spacing(10)}px;
    }

    ${theme.breakpoints.up('lg')} {
      align-items: inherit;
      text-align: ${({ reverse }) => (reverse ? 'right' : 'left')};
    }
  `}
`;

const RowContent = ({ heading, content, button, reverse }) => {
  return (
    <StyledContainer reverse={reverse}>
      <Text component="h3" variant="h3" mb={3}>
        {heading}
      </Text>
      <Text component="p" variant="h5" mt={2} mb={4}>
        {content}
      </Text>
      <Button component={Link} size="large" variant="contained" color="secondary" {...button}>
        {button.label}
      </Button>
    </StyledContainer>
  );
};

RowContent.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
  }).isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default RowContent;
