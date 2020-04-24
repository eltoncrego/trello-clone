import React from 'react';
import { StyledLoginContainer, StyledBrandingContainer, StyledBrandingTitle, StyledBrandingDesc, StyledLoginFormContainer, StyledLoginForm } from './LoginStyles';
import { StyledTrelloLogo } from '../../Shared/Components/StyledComponents';
import Input from './../../Shared/Components/Input/Input';
import Button from './../../Shared/Components/Button/Button';
import { LOGIN } from '../../Shared/Constants/Messages';

const Login = () => {
  return(
    <StyledLoginContainer>
      <StyledLoginFormContainer>
        <StyledTrelloLogo margin='0 0 128px 0'/>
        <StyledLoginForm>
          {LOGIN.INPUTS.map((input, i) => <Input key={i} {...input}/>)}
          <Button label={LOGIN.BUTTON_LABEL} onClickAction={() => alert('login!')}/>
        </StyledLoginForm>
      </StyledLoginFormContainer>
      <StyledBrandingContainer>
        <StyledBrandingTitle>{LOGIN.SLOGAN}</StyledBrandingTitle>
        <StyledBrandingDesc>{LOGIN.SECONDARY_SLOGAN}</StyledBrandingDesc>
      </StyledBrandingContainer>
    </StyledLoginContainer>
  );
};

export default Login;