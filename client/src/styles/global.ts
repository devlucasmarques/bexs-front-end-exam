import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  @font-face {
    font-family: 'Verdana';
      src: url('/fonts/Verdana.ttf');
  }

  @font-face {
    font-family: 'SFProText';
      src: url('/fonts/SFProText.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body {
    color: ${theme.colors.white.normal};
    font-family: 'Verdana', sans-serif;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
