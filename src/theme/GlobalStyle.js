import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  html {
    overflow-y: scroll;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .grecaptcha-badge {
    width: 70px !important;
    overflow: hidden !important;
    transition: all 0.3s ease !important;
    left: 4px !important;
  }

  .grecaptcha-badge:hover {
    width: 256px !important;
  }

  @media (max-width: 767px) {
    .grecaptcha-badge {
      display: none !important;
    }
  }
`;

export default GlobalStyle;
