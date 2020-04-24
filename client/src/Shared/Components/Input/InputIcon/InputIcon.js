import React from 'react';
import { StyledInputIconContainer, StyledInputIcon } from './InputIconStyles';

const InputIcon = ({ icon }) => (
  <StyledInputIconContainer>
    <StyledInputIcon className='material-icons'>
      {icon}
    </StyledInputIcon>
  </StyledInputIconContainer>
);

export default InputIcon;