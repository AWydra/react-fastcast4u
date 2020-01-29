import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
