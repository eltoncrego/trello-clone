import { createGlobalStyle } from 'styled-components';
import { color, font } from '../Shared/SharedStyles';

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
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    ${font.regular}
  }
`;