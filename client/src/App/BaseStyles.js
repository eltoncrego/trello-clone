import { createGlobalStyle } from 'styled-components';

import { font } from './../shared/styles';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    line-height: 1.2;
    ${font.size(16)}
    ${font.regular}
  }

  h1, h2, h3, h4, h5, h6, strong {
    ${font.bold}
  }
`;
