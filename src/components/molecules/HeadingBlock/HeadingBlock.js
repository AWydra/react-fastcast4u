import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/atoms/Title/Title';
import SubTitle from 'components/atoms/Subtitle/Subtitle';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 40px 0 60px;
`;

const HeadingBlock = ({ title, subtitle, ...props }) => (
  <StyledContainer>
    <Title {...props}>{title}</Title>
    {subtitle && <SubTitle>{subtitle}</SubTitle>}
  </StyledContainer>
);

HeadingBlock.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

HeadingBlock.defaultProps = {
  subtitle: '',
};

export default HeadingBlock;
