import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const StandardInput = () => <Input/>

const placeholder = 'placeholder text'
export const InputWithPlaceholderText = () => <Input inputProps={{placeholder}}/>;

const passwordProps = {
  type: 'password',
  placeholder: 'password',
}
export const PasswordInput = () => <Input inputProps={passwordProps}/>;

const passwordIconProps = {
  icon: 'lock',
  inputProps: {
    placeholder: 'Password',
    type: 'password',
  }
}
export const PasswordInputWithIcon = () => <Input {...passwordIconProps}/>;