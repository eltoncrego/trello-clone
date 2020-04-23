import styled from 'styled-components';
import { color, componentParams } from '../../SharedStyles';

export const StyledInputContainer = styled.div`
  border: 1px solid ${color.borderLightest};
  background-color: ${color.backgroundLight};
  border-radius: ${componentParams.fieldBorderRadius};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledInput = styled.input`
  padding: ${componentParams.fieldPadding};
  border: none;
  background: none;
  outline: none;
`;

