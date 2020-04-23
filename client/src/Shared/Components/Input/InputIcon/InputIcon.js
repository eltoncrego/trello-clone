import React from 'react';
import { StyledInputIconContainer, StyledInputIcon } from './InputIconStyles';

export const InputIcon = ({ icon }) => (
  <StyledInputIconContainer>
    <StyledInputIcon className='material-icons'>
      {icon}
    </StyledInputIcon>
  </StyledInputIconContainer>
);