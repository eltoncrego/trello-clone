import { createGlobalStyle } from 'styled-components';
import { color, font } from '../Shared/SharedStyles';

export default createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    background-color: ${color.backgroundPrimary};
  }

  body {
    color: ${color.textDarkest};
    ${font.regular}
    ${font.size(16)}
    line-height: 1.2;
  }
`;