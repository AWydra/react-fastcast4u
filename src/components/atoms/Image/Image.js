import React from 'react';
import styled from 'styled-components';
import { spacing } from '@material-ui/system';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Image = styled(props => <LazyLoadImage effect="opacity" {...props} />)`
  ${spacing}
  max-width: 100%;
  display: block;
  border-style: none;
`;

export default Image;
