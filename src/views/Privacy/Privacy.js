import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { LinearProgress } from '@material-ui/core';
import generalServices from 'services/general';
import FullContainer from 'components/atoms/FullContainer/FullContainer';

const PrivacySection = styled.section`
  ${({ theme }) => {
    css`
      font-family: ${theme.typography.fontFamily} !important;
    `;
  }}
`;

const Privacy = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const getPrivacyPolicy = async () => {
      const response = await generalServices.getPrivacyPolicy();
      setResponse(response.message);
    };

    getPrivacyPolicy();
  }, []);

  return (
    <FullContainer maxWidth="xl">
      {response ? (
        <PrivacySection dangerouslySetInnerHTML={{ __html: response }} />
      ) : (
        <LinearProgress />
      )}
    </FullContainer>
  );
};

export default Privacy;
