import React from 'react';
import { StyledInput, StyledInputContainer, StyledErrorDiv } from './InputStyles';
import InputIcon from './InputIcon/InputIcon';

const Input = ({ icon, inputProps, onSubmit, status, errorText, onFocusCallback }) => {

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter' && onSubmit) {
      onSubmit();
    }
  };

  return(
    <>
      <StyledErrorDiv>{errorText}</StyledErrorDiv>
      <StyledInputContainer status={status}>
        {icon ? <InputIcon icon={icon}/> : null}
        <StyledInput {...inputProps} onKeyPress={handleKeyPress} onFocus={onFocusCallback}/>
      </StyledInputContainer>
    </>
  );
};

export default Input;