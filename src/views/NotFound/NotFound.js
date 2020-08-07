import React from 'react';
import { Link } from 'react-router-dom';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import { useCurrentLanguage } from 'utils/customHooks';

const NotFound = () => {
  const lng = useCurrentLanguage();
  return (
    <HeadingBlock title="Error 404: Page not found" subtitle={<Link to={lng}>Return home</Link>} />
  );
};

export default NotFound;
