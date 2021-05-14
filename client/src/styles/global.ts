import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    src: url('/fonts/Verdana.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body {
    background: ${props => props.theme.colors.white.normal};
    color: ${props => props.theme.colors.white.normal};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
