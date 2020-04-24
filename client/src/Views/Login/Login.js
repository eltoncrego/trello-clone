import React from 'react';
import { StyledLoginContainer, StyledBrandingContainer, StyledBrandingTitle, StyledBrandingDesc, StyledLoginFormContainer, StyledLoginForm } from './LoginStyles';
import { StyledTrelloLogo } from '../../Shared/Components/StyledComponents';
import Input from './../../Shared/Components/Input/Input';
import Button from './../../Shared/Components/Button/Button';
import { LOGIN } from '../../Shared/Constants/Messages';
import { Link } from 'react-router-dom';
import { useFormInput } from './../../Shared/Utils/Hooks';

const Login = () => {
  const email = useFormInput('');
  const password = useFormInput('');
  
  const inputs = [
    {
      icon: 'person',
      inputProps: {
        placeholder: 'Email',
        type: 'email',
        ...email
      },
    },
    {
      icon: 'lock',
      inputProps: {
        placeholder: 'Password',
        type: 'password',
        ...password
      }
    }
  ];

  const onClick = () => {
    console.log(email.value, password.value);
  };

  return(
    <StyledLoginContainer>
      <StyledLoginFormContainer>
        <Link to='/'>
          <StyledTrelloLogo margin='0 0 128px 0'/>
        </Link>
        <StyledLoginForm>
          {inputs.map((input, i) => <Input key={i} {...input}/>)}
          <Button label={LOGIN.BUTTON_LABEL} onClickAction={onClick}/>
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