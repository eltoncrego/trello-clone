import React from 'react';
import { NavLeft, StyledTitle, StyledHeader } from './Styles';
import { color } from '../../shared/utils/Styles';
import { MESSAGES } from '../../shared/utils/Messages';
import Logo from './../../shared/components/Logo';

const SideBar = () => {
  return(
    <NavLeft>
      <StyledHeader>
        <Logo width='32px' fill={color.secondaryPrimary}/>
        <StyledTitle>{MESSAGES.TITLE}</StyledTitle>
      </StyledHeader>
    </NavLeft>
  );
}

export default SideBar;