import React from 'react';
import { StyledInput, StyledInputContainer } from './InputStyles';
import InputIcon from './InputIcon/InputIcon';

const Input = ({ icon, inputProps, onSubmit }) => {

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      onSubmit();
    }
  };

  return(
    <StyledInputContainer>
      {icon ? <InputIcon icon={icon}/> : null}
      <StyledInput {...inputProps} onKeyPress={handleKeyPress}/>
    </StyledInputContainer>
  );
};

export default Input;