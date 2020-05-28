import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import Text from 'components/atoms/Text/Text';

const Container = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CTASection = ({ heading, content, button }) => (
  <Container>
    <Text mb={2} component="h2" variant="h4" fontWeight={500}>
      {heading}
    </Text>
    {content && (
      <Text mb={5} variant="subtitle1">
        {content}
      </Text>
    )}
    {button.label && (
      <CTAButton variant="contained" color="primary" size="large" {...button}>
        {button.label}
      </CTAButton>
    )}
  </Container>
);

CTASection.defaultProps = {
  content: '',
  button: {},
};

CTASection.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default CTASection;
