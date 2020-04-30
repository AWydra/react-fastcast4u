// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const PlayerInfoContainer = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const Title = styled.p`
  ${({ theme }) => css`
    margin: 0%;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.5;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${theme.breakpoints.up('md')} {
      font-size: 1rem;
    }
  `}
`;

const Subtitle = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${6.5 / 8}rem;
    line-height: 1.4;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${theme.breakpoints.up('md')} {
      font-size: ${7 / 8}rem;
    }
  `}
`;

const PlayerInfo = ({ title, subtitle, ...props }) => (
  <PlayerInfoContainer {...props}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </PlayerInfoContainer>
);

PlayerInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PlayerInfo;
