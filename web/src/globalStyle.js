import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo:400,700,800|Lato|Open+Sans:400,600');

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    background-color: #171026;
    overflow: visible !important;
    padding-right: 0px !important;
  }
`;

export default GlobalStyle;
