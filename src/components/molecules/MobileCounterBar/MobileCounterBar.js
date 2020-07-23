import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Countdown from 'components/atoms/Countdown/Countdown';
import Text from 'components/atoms/Text/Text';

const Bar = styled.div`
  padding: ${({ theme }) => theme.spacing(0.25, 2)};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
`;

const MobileCounterBar = ({ content, date, ...props }) => {
  return (
    <Bar {...props}>
      <Text>{content}</Text>
      <Countdown date={date} />
    </Bar>
  );
};

MobileCounterBar.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
};

export default MobileCounterBar;
