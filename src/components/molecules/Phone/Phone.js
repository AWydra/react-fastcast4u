import React from 'react';
import PropTypes from 'prop-types';
import 'assets/css/devices.css';

const IphoneX = () => (
  <>
    <div className="notch">
      <div className="camera" />
      <div className="speaker" />
    </div>
    <div className="top-bar" />
    <div className="sleep" />
    <div className="bottom-bar" />
    <div className="volume" />
    <div className="overflow">
      <div className="shadow shadow--tr" />
      <div className="shadow shadow--tl" />
      <div className="shadow shadow--br" />
      <div className="shadow shadow--bl" />
    </div>
    <div className="inner-shadow" />
  </>
);

const Note8 = () => (
  <>
    <div className="inner" />
    <div className="overflow">
      <div className="shadow" />
    </div>
    <div className="speaker" />
    <div className="sensors" />
    <div className="more-sensors" />
    <div className="sleep" />
    <div className="volume" />
    <div className="camera" />
  </>
);

const Phone = ({ device, className, children, ...props }) => (
  <div className={`marvel-device ${device} ${className}`} {...props}>
    {device === 'iphone-x' ? <IphoneX /> : <Note8 />}
    <div className="screen">{children}</div>
  </div>
);

Phone.defaultProps = {
  className: '',
};

Phone.propTypes = {
  device: PropTypes.oneOf(['iphone-x', 'note8']).isRequired,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Phone;
