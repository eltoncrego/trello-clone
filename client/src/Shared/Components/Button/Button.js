import React from 'react';
import { StyledButtonContainer } from './ButtonStyles';

const Button = ({ label, onClickAction, status }) => (
  <StyledButtonContainer onClick={onClickAction} status={status}>
    {label}
  </StyledButtonContainer>
);

export default Button;