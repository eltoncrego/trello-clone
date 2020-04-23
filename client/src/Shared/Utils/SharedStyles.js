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
  textOnLink: '#ffffff',
  textLink: '#4680FF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#6B99FF',

  glowPrimary: 'rgba(70, 128, 255, 0.3)',
  glowPrimaryHover: 'rgba(56, 102, 204, 0.3)',
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
    box-shadow: 0 2px 4px 0 ${color ? color : 'rgba(0, 0, 0, 0.1)'};
  `,
  boxShadowMedium: color => css`
    box-shadow: 0 5px 10px 0 ${color ? color : 'rgba(0, 0, 0, 0.1)'};
  `,
};