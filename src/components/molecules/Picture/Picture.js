import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/atoms/Image/Image';

const Picture = ({ mobile, desktop, alt, ...props }) => (
  <picture {...props}>
    {desktop && (
      <>
        <source type="image/webp" media="(min-width:768px)" srcSet={`${desktop}.webp`} />
        <source type="image/png" media="(min-width:768px)" srcSet={`${desktop}.png`} />
      </>
    )}
    <source type="image/webp" srcSet={`${mobile}.webp`} />
    <Image type="image/png" srcSet={`${mobile}.png`} alt={alt} />
  </picture>
);

Picture.defaultProps = {
  desktop: '',
  alt: 'Fancy image',
};

Picture.propTypes = {
  mobile: PropTypes.string.isRequired,
  desktop: PropTypes.string,
  alt: PropTypes.string,
};

export default Picture;
