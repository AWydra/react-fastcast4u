import React from 'react';
import { Link } from 'react-router-dom';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';

const NotFound = () => {
  return (
    <HeadingBlock title="Error 404: Page not found" subtitle={<Link to="/">Return home</Link>} />
  );
};

export default NotFound;
