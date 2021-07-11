import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${reset}


  html {
   box-sizing: border-box;
   height: 100%;
   font-family: 'Montserrat', sans-serif;;
   color: ${colors.AZUL_ESCURO};

   text-rendering: auto;
   -ms-text-size-adjust: 100%;
   -webkit-text-size-adjust: 100%;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

   overflow-x: hidden;

   scroll-behavior: smooth;
  }

  body {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: auto;
    /* font-size: 18px; */
    /* line-height: 18px; */
    overflow-x: hidden;
    margin: 0px !important;
  }

  button {
    font-size: 16px;
    background: none;
    font-family: 'Montserrat', sans-serif;
    outline: none;

    &:hover {
      cursor: pointer;
    }

   
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .g-image {
    max-width: 300px;
  }

  h1,h2,h3,h4,h5,h6,p,a, img, button, br {
    ::selection {
     background-color:  ${colors.AZUL_CLARO};
     color: white;
   }
  }
`;
