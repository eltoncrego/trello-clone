import React from 'react';
import { StyledInput, StyledInputContainer } from './InputStyles';

export const Input = ({ inputProps }) => {
  return(
    <StyledInputContainer>
      <StyledInput {...inputProps}/>
    </StyledInputContainer>
  );
};