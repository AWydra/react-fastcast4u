import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

const Button = styled.button`
  background-color: magenta;
  margin: 0 0 0 9px;
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World!</h1>
      <Button>Click me!</Button>
    </>
  );
}

export default Root;
