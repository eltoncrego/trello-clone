import React from 'react';
import { StyledButtonContainer } from './ButtonStyles';

const Button = ({ label, onClickAction}) => (
  <StyledButtonContainer onClick={onClickAction}>
    {label}
  </StyledButtonContainer>
);

export default Button;