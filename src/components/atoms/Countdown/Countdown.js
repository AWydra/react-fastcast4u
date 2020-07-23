import React from 'react';
import PropTypes from 'prop-types';
import CountdownPlugin from 'react-countdown';
import Text from 'components/atoms/Text/Text';

const Completionist = ({ ...props }) => <Text {...props}>Promotion expired!</Text>;

const Countdown = ({ date, ...props }) => {
  // eslint-disable-next-line react/prop-types
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist {...props} />;
    }
    return (
      <Text {...props}>
        {!!days && `${days}d`} {hours}h {minutes}m {seconds}s
      </Text>
    );
  };
  return <CountdownPlugin date={date} renderer={renderer} />;
};

Countdown.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number]).isRequired,
};

export default Countdown;
