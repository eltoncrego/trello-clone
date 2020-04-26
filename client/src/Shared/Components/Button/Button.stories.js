import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const testLabel = 'button label'
const buttonProps = {
  label: testLabel,
  onClickAction: action('clicked'),
}
export const StandardButton = () => <Button {...buttonProps}/>;
export const LoadingButton = () => <Button status={'loading'} {...buttonProps}/>;
export const ErrorButton = () => <Button status={'error'} {...buttonProps}/>;
export const SuccessButton = () => <Button status={'success'} {...buttonProps}/>;