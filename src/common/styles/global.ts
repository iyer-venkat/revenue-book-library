import { createGlobalStyle } from 'styled-components';
import { colours } from './colours';
import { fontSizes } from './fonts';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Gotham A', 'Gotham B', Gotham, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: ${fontSizes.base};
    background-color: ${colours.backgrounds.default};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
  }

  #root {
    width: 100vw;
  }

  a {
    font-weight: 500;
    text-decoration: inherit;
    color: ${colours.text.link};
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  body > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #fff;
    }

    a:hover {
      color: ${colours.text.body};
    }

    button {
      background-color: #f9f9f9;
    }
  }
`;
