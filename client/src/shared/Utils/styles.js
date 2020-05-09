import { css } from 'styled-components';

export const font = {
  regular: 'font-family: "Circular"; font-weight: normal;',
  bold: 'font-family: "CircularBold"; font-weight: normal;',
  size: (size) => `font-size: ${size}px;`,
};

export const zIndexes = {
  lower: 0,
  mid: 1,
  upper: 2,
};

export const globalProperties = {
  itemSpacing: '16px',
  boxShadowSpread: '0 2px 4px 0',
  boxShadowLiftSpread: '0 5px 10px 0'
};

export const global = {
  borderRadius: 'border-radius: 4px;',
  boxShadow: `box-shadow: ${globalProperties.boxShadowSpread} rgba(14, 25, 51, 0.1);`,
  boxShadowLift: `box-shadow: ${globalProperties.boxShadowLiftSpread} rgba(14, 25, 51, 0.1);`,
  transition: (props) => css`
    transition: all 200ms cubic-bezier(0.2, 0, 0, 1);
    transition: ${props};
  `,
  draggable: (props, weight) => css`
    transition: all 200ms cubic-bezier(0.2, 0, 0, 1);
    transition-property: transform, box-shadow;
    ${props.isBeingDragged &&
    css`
      transform: ${weight > 0 ? 'rotate(2deg)' : 'rotate(4deg)'};
      box-shadow: ${globalProperties.boxShadowLiftSpread} rgba(14, 25, 51, 0.1);
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
  bgOverlay: css`
    background-color: rgba(49, 52, 69, 0.6);
  `,
};

export const color = {
  primary: '#4680FF',
  bg: '#F6F7FB',
  bgLight: '#FFFFFF',
  text: '#313445',
  secondaryText: '#83858F',
  textOnColor: '#FFFFFF',
  light: '#E8E8E8',
};
