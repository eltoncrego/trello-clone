import styled from 'styled-components';
import { color, componentParams } from '../../SharedStyles';
import { StyledInputIcon, StyledInputIconContainer } from './InputIcon/InputIconStyles';

export const StyledInput = styled.input`
  flex: 1;
  padding: ${componentParams.fieldPadding};
  border: none;
  background: none;
  outline: none;
  &::placeholder {
    color: ${color.textLight};
  }
`;

export const StyledInputContainer = styled.div`
  border: 1px solid ${color.borderLightest};
  background-color: ${color.backgroundLight};
  border-radius: ${componentParams.fieldBorderRadius};
  display: flex;
  align-items: center;
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
