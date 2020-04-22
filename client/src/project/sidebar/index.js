import React, { useState } from 'react';
import { NavLeft, StyledTitle, StyledLogo, StyledHeader } from './Styles';
import { color } from '../../shared/Styles';

const SideBar = () => {
  const [fullWidth, setFullWidth] = useState(false);

  return(
    <NavLeft 
      onMouseEnter={() => setFullWidth(true)}
      onMouseLeave={() => setFullWidth(false)}
    >
      <StyledHeader>
        <StyledLogo width='24px' fill={color.secondaryPrimary} />
        <StyledTitle visible={fullWidth}>Trello Clone</StyledTitle>
      </StyledHeader>
    </NavLeft>
  );
}

export default SideBar;