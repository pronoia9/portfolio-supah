'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Matter';
    font-weight: 500;
    font-style: normal;
    src: url('/src/assets/matter-medium.woff2') format("woff2");
    font-display: swap
  }

  @font-face {
    font-family: 'Matter Light';
    font-weight: 300;
    font-style: normal;
    src: url('/src/assets/matter-light.woff2') format("woff2");
    font-display: swap
  }

  :root {
    --c-background: ${({ theme }) => theme.background};    
    --c-font: ${({ theme }) => theme.font};    
    --font: 'Matter';
  }
`;

export default GlobalStyles;
