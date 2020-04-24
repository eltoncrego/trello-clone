import styled from 'styled-components';
// import Image from './Assets/Images/work.jpg';
import { color, zIndexes, componentStyles, font } from '../../Shared/Utils/SharedStyles';
import { StyledInputContainer } from './../../Shared/Components/Input/InputStyles';
import { StyledButtonContainer } from './../../Shared/Components/Button/ButtonStyles';

export const StyledLoginContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledBrandingContainer = styled.div`
  position: relative;
  background-color: ${color.primary};
  z-index: ${zIndexes.bg};
  padding: ${componentStyles.paddingLarge};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${color.textOnColor};
  @media(max-width: 768px) {
    display: none;
  }
`;

export const StyledBrandingTitle = styled.h1`
  z-index: ${zIndexes.overScrim};
  ${font.size(80)};
  line-height: 80px;
  margin: 0;
  margin-bottom: ${componentStyles.itemSpacingLarge};
`;

export const StyledBrandingDesc = styled.span`
  z-index: ${zIndexes.overScrim};
  ${font.size(20)};
  opacity: 0.6;
`;

export const StyledLoginFormContainer = styled.div`
  padding: ${componentStyles.paddingLarge};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media(max-width: 768px) {
    align-items: center;
  }
`;

export const StyledLoginForm = styled.div`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & ${StyledInputContainer} {
    width: 100%;
    margin-bottom: ${componentStyles.itemSpacing};
  }
  & ${StyledButtonContainer} {
    margin-top: ${componentStyles.itemSpacingLarge};
    align-self: flex-end;
  }
  @media(max-width: 768px) {
    min-width: 0;
    max-width: 450px;
    align-items: center;
  }
`;