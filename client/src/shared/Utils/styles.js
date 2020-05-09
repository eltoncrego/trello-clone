import { css } from 'styled-components';

export const font = {
  regular: 'font-family: "Circular"; font-weight: normal;',
  bold: 'font-family: "CircularBold"; font-weight: normal;',
  size: (size) => `font-size: ${size}px;`,
};

export const global = {
  borderRadius: 'border-radius: 4px;',
  boxShadow: 'box-shadow: 0 2px 4px 0 rgba(14, 25, 51, 0.1);',
  boxShadowLift: 'box-shadow: 0 5px 10px 0 rgba(14, 25, 51, 0.1);',
  draggable: (props) => css`
    transition: all 200ms cubic-bezier(0.2, 0, 0, 1);
    transition-property: box-shadow;
    ${props.isBeingDragged &&
    css`
      box-shadow: 0 5px 10px 0 rgba(14, 25, 51, 0.1);
    `}
  `,
  noSelect: css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
};

export const globalProperties = {
  itemSpacing: '16px',
};

export const color = {
  bg: '#F6F7FB',
  bgLight: '#FFFFFF',
  text: '#313445',
  light: '#E8E8E8',
};
