import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap');

  body {
    margin: 0;
    font-family: Source Sans Pro;
    font-weight: 400;
    background-color: #FFFFFF;
    overflow: hidden;
    padding-right: 0px !important;
    height: 100vh;
  }
`;

export default GlobalStyle;
