import { createGlobalStyle } from 'styled-components';

import { color, font } from '../shared/Styles';

export default createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    color: ${color.text};
    ${font.regular};
    ${font.size(14)};
  }
`;