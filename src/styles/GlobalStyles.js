import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #1a1a1a;
    color: white;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }
`;