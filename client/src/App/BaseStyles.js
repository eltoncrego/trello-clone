import { createGlobalStyle } from 'styled-components';

import { font } from './../shared/styles';

export default createGlobalStyle`
  html, body, #trello-clone__root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }
  
  #trello-clone__root {
    display: flex;
    flex-direction: column;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    ${font.regular}
  }

  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  body {
    line-height: 1.2;
    ${font.size(16)}
    ${font.regular}
  }

  h1, h2, h3, h4, h5, h6, strong {
    ${font.bold}
  }

  button {
    background: none;
    border: none;
  }
`;