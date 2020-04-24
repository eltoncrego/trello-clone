import styled from 'styled-components';
import { color, componentStyles, spices } from '../../Utils/SharedStyles';
import { StyledInputIcon, StyledInputIconContainer } from './InputIcon/InputIconStyles';

export const StyledInput = styled.input`
  flex: 1;
  padding: ${componentStyles.fieldPadding};
  border: none;
  background: none;
  outline: none;
  ${spices.noSelect};
  &::placeholder {
    color: ${color.textLight};
    text-transform: capitalize;
  }
`;

export const StyledInputContainer = styled.div`
  border: 1px solid ${color.borderLightest};
  background-color: ${color.backgroundLight};
  border-radius: ${componentStyles.borderRadius};
  display: flex;
  align-items: center;
  ${spices.interactionTransition};
  transition-property: border-color;
  &:focus-within {
    border-color: ${color.borderInputFocus};
  }
  &:focus-within ${StyledInputIconContainer} {
    border-color: ${color.borderInputFocus};
  }
  &:focus-within  ${StyledInputIcon} {
    color: ${color.borderInputFocus};
  }
`;
