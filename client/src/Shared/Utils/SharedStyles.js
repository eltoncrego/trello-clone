import { css } from 'styled-components';

export const color = {
  backgroundPrimary: '#F6F7FB',
  backgroundLight: '#FFFFFF',
  primary: '#4680FF',
  primaryHover: '#3866CC',
  secondary: '#FB617F',
  tertiary: '#FEB64D',

  textDarkest: '#0E1933',
  textDark: '#323B51',
  textMedium: '#51586B',
  textLight: '#979BA6',
  textOnColor: '#ffffff',
  textLink: '#4680FF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#6B99FF',

  glowPrimary: 'rgba(70, 128, 255, 0.3)',
  glowPrimaryHover: 'rgba(56, 102, 204, 0.3)',
  loading: '#FA9500',
  error: '#EF3E36',
  success: '#8FC590'
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: size => `font-size: ${size}px;`,
};

export const componentStyles = {
  paddingLarge: '64px',
  paddingMedium: '32px',
  borderRadius: '4px',
  fieldLargePadding: '32px',
  fieldPadding: '16px',
  fieldLessPadding: '8px',
  fieldMediumPadding: '12px',
  itemSpacing: '8px',
  itemSpacingMedium: '12px',
  itemSpacingLarge: '16px',
};

export const spices = {
  interactionTransition: css`
    transition: all 100ms ease-in-out;
  `,
  boxShadowLight: color => css`
    box-shadow: 0 2px 4px 0 ${color ? color : 'rgba(14, 25, 51, 0.1)'};
  `,
  boxShadowMedium: color => css`
    box-shadow: 0 5px 10px 0 ${color ? color : 'rgba(14, 25, 51, 0.1)'};
  `,
  noSelect: css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  slowAnimation: name => css`
    animation-name: ${name};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  `,
  joltAnimation: name => css`
    animation-name: ${name};
    animation-duration: 250ms;
    animation-iteration-count: 2;
  `,
};

export const zIndexes = {
  bg: '0',
  scrim: '1',
  overScrim: '2',
}