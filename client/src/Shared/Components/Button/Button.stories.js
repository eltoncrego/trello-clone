import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const StandardButton = () => <Button label={'hello'} onClickAction={action('clicked')}/>