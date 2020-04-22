import styled from 'styled-components';
import { zIndices, color, font } from '../../shared/Styles';

import Logo from './../../shared/components/Logo';

export const NavLeft = styled.div`
  z-index: ${zIndices.navLeft};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${color.brandPrimary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 56px;
  overflow-x: hidden;
  transition: all 100ms;
  &:hover {
    width: 201px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
`;

export const StyledLogo = styled(Logo)``;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  transition: opacity 100ms ease-in-out;
  padding: 16px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const StyledTitle = styled.h1`
  color: ${color.secondaryPrimary};
  margin: 0 4px 0 0;
  line-height: 24px;
  width: 129px;
  visibility: hidden;
  opacity: 0;
  transition: all 100ms ease-in-out;
  transition-property: visibility, opacity, margin-left;
  ${NavLeft}:hover & {
    visibility: visible;
    opacity: 1;
    margin-left: 12px;
  }
  ${font.size(24)}
`;