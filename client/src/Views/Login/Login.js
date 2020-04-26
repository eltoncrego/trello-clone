import React, { useState, useEffect } from 'react';
import { StyledLoginContainer, StyledBrandingContainer, StyledBrandingTitle, StyledBrandingDesc, StyledLoginFormContainer, StyledLoginForm } from './LoginStyles';
import { StyledTrelloLogo } from '../../Shared/Components/StyledComponents';
import Input from './../../Shared/Components/Input/Input';
import Button from './../../Shared/Components/Button/Button';
import { LOGIN } from '../../Shared/Constants/Messages';
import { Link } from 'react-router-dom';
import { useFormInput, useFormStatus } from './../../Shared/Utils/Hooks';
import { postVerifyUser } from '../../Shared/Utils/Services';

const inputs = [
  {
    icon: 'person',
    ...emailStatus,
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
    ...passwordStatus,
    status: passwordStatus.status,
    errorText: passwordStatus.errorText,
    inputProps: {
      placeholder: 'Password',
      type: 'password',
      ...password
    },
    onSubmit: submitForm,
  }
];

const buttonProps = {
  label: LOGIN.BUTTON_LABEL,
  onClickAction: submitForm,
};

const Login = () => {
  const [buttonStatus, setButtonStatus] = useState('');
  const email = useFormInput('');
  const password = useFormInput('');
  const emailStatus = useFormStatus('', '');
  const passwordStatus = useFormStatus('', '');

  useEffect(() => {
    setButtonStatus('');
  }, [email.value, password.value]);

  function handleServerError({ error }) {
    if (error.code === 0) {
      emailStatus.updateStatus('error', error.text);
    }
    if (error.code === 1) {
      emailStatus.updateStatus('error', error.text);
      passwordStatus.updateStatus('error', error.text);
    }
  }

  function handleVerifyUserResponse(data) {
    if (data.user) {
      setButtonStatus('success');
      emailStatus.updateStatus('', '');
      passwordStatus.updateStatus('', '');
    } else if (data.error) {
      setButtonStatus('error');
      handleServerError(data);
    }
  };

  function submitForm() {
    setButtonStatus('loading');
    const user = {
      email: email.value,
      password: password.value
    };
    postVerifyUser(user).then(handleVerifyUserResponse);
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