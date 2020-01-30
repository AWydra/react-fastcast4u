// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography as MuiTypography, Button } from '@material-ui/core';
import RocketIcon from 'assets/svg/RocketIcon';
import FullContainer from 'components/atoms/FullContainer';
import theme from 'theme/mainTheme';

const Typography = styled(MuiTypography)`
  font-weight: 700;

  ${theme.breakpoints.up('lg')} {
  }
`;

const StyledButton = styled(Button)`
  margin-top: ${theme.spacing(4)}px;
  padding: 0 ${theme.spacing(4)}px;

  .MuiButton-label {
    font-size: 18px;
    font-weight: 700;
    line-height: 3;
  }
`;

const Home = () => {
  return (
    <FullContainer center maxWidth="xl">
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Create Your Own Internet Radio Station
      </Typography>
      <StyledButton
        component={Link}
        to="/asdasd"
        variant="contained"
        color="primary"
        size="large"
        endIcon={<RocketIcon />}
      >
        Start Now
      </StyledButton>
    </FullContainer>
  );
};

export default Home;
