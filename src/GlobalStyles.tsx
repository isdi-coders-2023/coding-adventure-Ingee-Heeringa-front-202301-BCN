import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primaryColor: #1E1E1E;
    --accentColor: #CCCF18;

    --primaryFont: "Roboto", sans-serif;
    --secondaryFont: "Saira Stencil One", sans-serif;
  }

  *, *::before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--primaryFont);
  }

  ul, ol, li {
    list-style-type: none;
    padding: 0;
  }

  button, input {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a, a:active, a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
