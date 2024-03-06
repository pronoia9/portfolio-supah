'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: Matter;
    src: url('/src/assets/MatterTRIALVF-Uprights.ttf') format('truetype supports variations'),
         url('/src/assets/MatterTRIALVF-Uprights.ttf') format('truetype-variations');
    font-weight: 100 1000;
  }

  :root {
    --c-background: ${({ theme }) => theme.background};    
    --c-font: ${({ theme }) => theme.font};    
    --font: Matter;
    --font-fallback: Helvetica,Arial,sans-serif;
  }

  *,:after,:before {
    box-sizing: border-box
  }

  html {
    font-size: 10px
  }

  body {
    background: #fff;
    color: #000;
    margin: 0;
    padding: 0;
    font-family: var(--font), var(--font-fallback);
    font-size: 1.6rem;
    font-weight: 300
  }

  #root {
    padding: 4.4rem 5rem 6rem
  }

  @media(max-width: 440px) {
    #root {
      padding:4.4rem 2.5rem 6rem
    }
  }

  a {
    color: inherit;
    text-decoration: none
  }

  h2 {
    font-size: 7.2rem;
    font-weight: 500;
    margin-bottom: 1rem
  }

  h2+p {
    margin-bottom: 4rem
  }

  @media(max-width: 440px) {
    h2 {
      font-size:4rem
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0
  }

  .works .work {
    font-size: 3rem;
    font-weight: 500
  }

  @media(max-width: 440px) {
    .works .work {
      font-size:2rem
    }
  }

  .works .work a {
    background: #fff;
    padding: 1rem 0;
    display: block;
    position: relative;
    z-index: 1;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-top: -1px;
    display: flex;
    align-items: center
  }

  .works .work a:visited:after {
    color: #000
  }

  .works .work a:after {
    content: "âœ“";
    position: absolute;
    right: 10px;
    color: #fff
  }

  @media(max-width: 440px) {
    .works .work a:after {
      -webkit-transform:none!important;
      transform: none!important;
      font-size: 1.5rem;
      top: 15px;
      right: 4px
    }
  }

  .works .work img {
    width: auto;
    height: 80px;
    margin-right: 10px
  }

  .works .work em {
    font-weight: 300;
    font-size: 2rem;
    font-style: normal
  }

  .works .work span {
    pointer-events: none
  }

  .link,.works .work span {
    display: inline-block
  }

  @media(max-width: 440px) {
    .link {
      -webkit-transform:translateX(4px)!important;
      transform: translateX(4px)!important
    }
  }

  .overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    mix-blend-mode: difference;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    pointer-events: none
  }

  .experiments {
    -webkit-columns: 2;
    column-count: 2
  }

  @media(max-width: 640px) {
    .experiments {
      -webkit-columns:1;
      column-count: 1
    }
  }

  .experiments .experiment {
    font-size: 1.8rem;
    font-weight: 500
  }

  .experiments .experiment a {
    background: #fff;
    padding: 1rem 0;
    display: block;
    position: relative;
    z-index: 1;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-top: -1px;
    display: flex;
    align-items: center
  }

  .experiments .experiment a img {
    width: auto;
    height: 60px;
    margin-right: 10px
  }

  .experiments .experiment a:visited:after {
    color: #000
  }

  .experiments .experiment a:after {
    content: "âœ“";
    position: absolute;
    right: 10px;
    color: #fff
  }

  .experiments .experiment em {
    font-weight: 300;
    font-size: 1.2rem;
    font-style: normal;
    display: inline-block;
    width: 17px
  }

  .experiments .experiment span {
    display: inline-block;
    pointer-events: none
  }

  section {
    opacity: 0
  }

  ul {
    margin: 0;
    padding: 0
  }

  ul li {
    list-style-type: none;
    font-size: 1.6rem
  }

  ul li,ul li a {
    padding: 1rem 0;
    border-bottom: 1px solid #000
  }

  ul li a {
    background: #fff;
    display: block;
    position: relative;
    z-index: 1;
    border-top: 1px solid #000;
    margin-top: -1px
  }

  .no-border li {
    border-bottom: none;
    padding: 0
  }

  iframe {
    display: none!important
  }

  /*# sourceMappingURL=main.8e896fda.chunk.css.map */

`;

export default GlobalStyles;
