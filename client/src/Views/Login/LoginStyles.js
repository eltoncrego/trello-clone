import styled from 'styled-components';
// import Image from './Assets/Images/work.jpg';
import { color, zIndexes, componentStyles, font } from '../../Shared/Utils/SharedStyles';
import { StyledInputContainer } from './../../Shared/Components/Input/InputStyles';
import { StyledButtonContainer } from './../../Shared/Components/Button/ButtonStyles';

export const StyledLoginContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
`;

export const StyledBrandingTitle = styled.h1`
  z-index: ${zIndexes.overScrim};
  ${font.size(60)};
  line-height: 60px;
  margin: 0;
  margin-bottom: ${componentStyles.itemSpacingLarge};
`;

export const StyledBrandingDesc = styled.span`
  z-index: ${zIndexes.overScrim};
  opacity: 0.6;
`;

export const StyledLoginFormContainer = styled.div`
  padding: ${componentStyles.paddingLarge};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & ${StyledInputContainer} {
    margin-bottom: ${componentStyles.itemSpacing};
  }
  & ${StyledButtonContainer} {
    margin-top: ${componentStyles.itemSpacingLarge};
    align-self: flex-end;
  }
`;