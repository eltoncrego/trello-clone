import React from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';

export default {
  component: Input,
  title: 'Input',
};

export const StandardInput = () => <Input onSubmit={action('submit')}/>

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