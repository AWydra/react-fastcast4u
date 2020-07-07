import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const TitleSection = ({ primary, secondary, end, children, ...props }) => (
  <Container maxWidth="xl" {...props} style={{ paddingTop: '2em', paddingBottom: !end && '4em' }}>
    <Text component="h2" variant="h4" mb={secondary ? 1 : 6} align="center" fontWeight={500}>
      {primary}
    </Text>
    {secondary && (
      <Text align="center" variant="h6" mb={6} color="textSecondary">
        {secondary}
      </Text>
    )}
    {children}
  </Container>
);

TitleSection.defaultProps = {
  secondary: '',
  end: false,
};

TitleSection.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  end: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default TitleSection;
