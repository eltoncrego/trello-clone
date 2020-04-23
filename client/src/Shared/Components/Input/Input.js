import React from 'react';
import { StyledInput, StyledInputContainer } from './InputStyles';
import { InputIcon } from './InputIcon/InputIcon';

export const Input = ({ icon, inputProps }) => {
  return(
    <StyledInputContainer>
      {icon ? <InputIcon icon={icon}/> : null}
      <StyledInput {...inputProps}/>
    </StyledInputContainer>
  );
};