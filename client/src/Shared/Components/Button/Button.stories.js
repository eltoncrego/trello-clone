import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const testLabel = 'button label'
export const StandardButton = () => <Button label={testLabel} onClickAction={action('clicked')}/>