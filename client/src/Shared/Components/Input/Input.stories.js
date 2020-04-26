import React from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';

export default {
  component: Input,
  title: 'Input',
};

export const StandardInput = () => <Input/>

const placeholder = 'placeholder text'
export const InputWithPlaceholderText = () => <Input onSubmit={action('submit')} inputProps={{placeholder}}/>;

const passwordProps = {
  type: 'password',
  placeholder: 'password',
}
export const PasswordInput = () => <Input onSubmit={action('submit')} inputProps={passwordProps}/>;

const passwordIconProps = {
  icon: 'lock',
  inputProps: {
    placeholder: 'Password',
    type: 'password',
  }
}
export const PasswordInputWithIcon = () => <Input onSubmit={action('submit')} {...passwordIconProps}/>;

const status = 'error';
export const PasswordInputWithIconError = () => <Input onSubmit={action('submit')} {...passwordIconProps} status={status}/>;

const error = {
  status,
  errorText: 'this is a test error label'
};
export const PasswordInputWithIconErrorAndText = () => <Input onSubmit={action('submit')} {...passwordIconProps} {...error}/>;