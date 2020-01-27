import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: magenta;
  margin: 0 0 0 9px;
`;

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Button>Click me!</Button>
    </>
  );
}

export default App;
