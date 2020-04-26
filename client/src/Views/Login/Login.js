import React, { useState, useEffect } from 'react';
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
  const [emailStatus, setEmailStatus] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const email = useFormInput('');
  const password = useFormInput('');

  const inputs = [
    {
      icon: 'person',
      status: emailStatus,
      errorText: emailErrorText,
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

  useEffect(() => {
    setButtonStatus('');
  }, [email.value, password.value])

  let buttonProps = {
    label: LOGIN.BUTTON_LABEL,
    onClickAction: submitForm,
  }

  function handleNewUserResponse(data) {
    if (data.user) {
      setButtonStatus('success');
      setEmailStatus('=');
      setEmailErrorText('');
    } else if (data.error) {
      setButtonStatus('error');
      console.log(data.error);
      if (data.error.code === 0) {
        setEmailStatus('error');
        setEmailErrorText(data.error.text);
      }
    }
  };

  function submitForm() {
    setButtonStatus('loading');
    const newUser = {
      email: email.value,
      password: password.value
    };
    postNewUser(newUser).then(handleNewUserResponse);
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