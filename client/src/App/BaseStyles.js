import { createGlobalStyle } from 'styled-components';
import { color, font } from '../Shared/Utils/SharedStyles';

export default createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100%;
    min-height: 100%;
    background-color: ${color.backgroundPrimary};
  }

  body {
    color: ${color.textDarkest};
    ${font.regular}
    ${font.size(16)}
    line-height: 1.2;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    ${font.regular}
  }

  h1, h2, h3, h4, h5, h6, strong {
    ${font.bold}
  }
`;