import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body {
    color: ${theme.colors.white.normal};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
