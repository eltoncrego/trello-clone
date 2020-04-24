import React, { useState } from 'react';
import { StyledLoginContainer, StyledBrandingContainer, StyledBrandingTitle, StyledBrandingDesc, StyledLoginFormContainer, StyledLoginForm } from './LoginStyles';
import { StyledTrelloLogo } from '../../Shared/Components/StyledComponents';
import Input from './../../Shared/Components/Input/Input';
import Button from './../../Shared/Components/Button/Button';
import { LOGIN } from '../../Shared/Constants/Messages';
import { Link } from 'react-router-dom';
import { useFormInput } from './../../Shared/Utils/Hooks';
import { postNewUser } from '../../Shared/Utils/Services';

const Login = () => {
  const [buttonStatus, setButtonStatus] = useState('');
  const email = useFormInput('');
  const password = useFormInput('');

  const inputs = [
    {
      icon: 'person',
      inputProps: {
        placeholder: 'Email',
        type: 'email',
        autoFocus: true,
        ...email
      },
      onSubmit: submitForm,
    },
    {
      icon: 'lock',
      inputProps: {
        placeholder: 'Password',
        type: 'password',
        ...password
      },
      onSubmit: submitForm,
    }
  ];

  let buttonProps = {
    label: LOGIN.BUTTON_LABEL,
    onClickAction: submitForm,
  }

  function submitForm() {
    setButtonStatus('loading');
    const newUser = {
      email: email.value,
      password: password.value
    };
    postNewUser(newUser).then(data => data.user ? console.log(data.user) : console.error(data.error));
  };


  return(
    <StyledLoginContainer>
      <StyledLoginFormContainer>
        <Link to='/'>
          <StyledTrelloLogo margin='0 0 128px 0'/>
        </Link>
        <StyledLoginForm>
          {inputs.map((input, i) => <Input key={i} {...input}/>)}
          <Button {...buttonProps} status={buttonStatus}/>
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