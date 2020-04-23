import React from 'react';
import { StyledInput, StyledInputContainer } from './InputStyles';
import InputIcon from './InputIcon/InputIcon';

const Input = ({ icon, inputProps }) => (
  <StyledInputContainer>
    {icon ? <InputIcon icon={icon}/> : null}
    <StyledInput {...inputProps}/>
  </StyledInputContainer>
);

export default Input;