import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
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
  const currency = useSelector(state => state.general.currency);
  const data = useSelector(state => state.cms.notification);
  return (
    data.active && (
      <Bar {...props}>
        <Text>{data.mobile.replace('{currency}', currency)}</Text>
        <Countdown date={new Date(data.date)} />
      </Bar>
    )
  );
};

MobileCounterBar.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
};

export default MobileCounterBar;
